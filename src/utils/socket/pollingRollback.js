/**
 * 轮询
 */

export default class PollingRollback {
  constructor(interval) {
    this.rollbackMap = {}
    this.rollbackTimer = null
    this.interval = interval || 3000
  }

  set(id, rollback) {
    this.rollbackMap[id] = rollback
  }

  remove(id) {
    delete this.rollbackMap[id]
  }

  open() {
    this.rollbackTimer = setInterval(() => {
      Object.values(this.rollbackMap).forEach(rollback => rollback && rollback())
    }, this.interval)
  }

  close() {
    clearInterval(this.rollbackTimer)
  }
}
