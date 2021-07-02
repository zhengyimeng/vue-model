import Socket from './socket'
import { WS_URL } from '@/assets/js/config'

class CommonWs {
  constructor(url) {
    this.ws = null
    this.url = url
  }

  connect() {
    this.ws = new Socket(this.url)
  }

  request(payload) {
    if (!this.ws) this.connect()
    this.ws.request(payload)
  }

  subscribe(payload, rollback, callback) {
    if (!this.ws) this.connect()
    this.ws.subscribe({ payload, rollback, callback })
  }

  unSubscribe(id) {
    if (!this.ws) this.connect()
    this.ws.unSubscribe(id)
  }

  close() {
    if (!this.ws) this.connect()
    this.ws.close()
  }

  isConnected() {
    return this.ws && this.ws.isConnected()
  }
}

// ws
export const ws = new CommonWs(WS_URL)

// // ws2
// export const ws2 = new CommonWs(WS_URL)
