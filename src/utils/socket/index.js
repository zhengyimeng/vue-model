/**
 * 附带一份我自己封装的健壮的 ws 系统
 * websocket
 */
import Heartbeat from './heartbeat'
import PollingRollback from './pollingRollback'

export default class Socket {
  constructor(url) {
    this.ws = null
    this.url = url
    this.subscriptionMap = {}
    this.pollingRollback = null
    this.createPollingCallback() // 创建轮询
    this.start()
  }

  start() {
    if (!this.url) return console.error('url is required')
    this.ws = new WebSocket(this.url + "?lang=" + window.localStorage.lang);
    this.ws.addEventListener("open", this.onOpen);
    this.ws.addEventListener("message", this.onMessage);
    this.ws.addEventListener("close", this.onClose);
    this.ws.addEventListener("error", this.onError);
  }

  request(payload) { // 单纯地给服务器发送数据
    if (this.isConnected()) {
      this.ws.send(JSON.stringify({ ...payload, event: 'req' }));
    }
  }

  subscribe({ payload, rollback, callback }, isReSubscribe) {
    if (!isReSubscribe && this.subscriptionMap[payload.id]) return
    this.subscriptionMap[payload.id] = { payload, rollback, callback }
    this.pollingRollback.set(payload.id, rollback)

    if (this.isConnected()) {
      this.ws.send(JSON.stringify({ ...payload, event: 'sub' }));
    }
  }

  unSubscribe(id) {
    if (!id) return

    if (this.isConnected()) {
      if (this.subscriptionMap[id]) {
        const payload = this.subscriptionMap[id].payload
        this.ws.send(JSON.stringify({ ...payload, event: 'cancel' }));

        this.pollingRollback.remove(id)
        delete this.subscriptionMap[id];
      }
    }
  }

  isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN
  }

  onOpen = () => {
    clearInterval(this.reConnectTimer)
    this.createHeartbeat() // 创建 socket 心脏
    this.reSubscribe() // 重新订阅已有的sub
    this.pollingRollback.close() // ws 连接之后，关闭轮询
  }

  onMessage = (result) => {
    const data = result.data
    if (/ping|pong/i.test(data)) return

    const normalizedData = JSON.parse(data || "{}");
    this.handleCallback(normalizedData);
  }

  handleCallback = (data) => {
    const id = data.id || data.topic;
    if (!id) return;

    if (this.subscriptionMap[id]) {
      this.subscriptionMap[id]["callback"] && this.subscriptionMap[id]["callback"](data);
    }
  }

  onClose = () => {
    console.warn(`【Websocket is closed】`)
    this.ws.removeEventListener("open", this.onOpen);
    this.ws.removeEventListener("message", this.onMessage);
    this.ws.removeEventListener("close", this.onClose);
    this.ws.removeEventListener("error", this.onError);
    this.ws = null;
  }

  onError = (error) => {
    if (error && error.message) {
      console.error(`【Websocket error】 ${error.message}`)
    }
    this.ws.close()
    this.reConnect()
  }

  reConnect() { // 开启重连
    this.pollingRollback.open() // ws连接之前，开启轮询

    if (this.reConnectTimer) return
    this.reConnectTimer = setInterval(() => {
      this.start()
    }, 3000)
  }

  reSubscribe() {
    Object.values(this.subscriptionMap).forEach(subscription => this.subscribe(subscription, true))
  }

  createHeartbeat() {
    this.heartbeat = new Heartbeat(this.ws)
    this.heartbeat.addEventListener('die', () => {
      this.ws.close()
      this.ws.reConnect()
    })
  }

  createPollingCallback() {
    this.pollingRollback = new PollingRollback()
  }
}


