// 订阅发布类

interface Events {
  [propname: string]: any
}

const defaultFunction = () => {}
class Observer {
  events: Events
  constructor() {
    this.events = {}
  }
  subscribe(eventName: string, fn = defaultFunction) {
    this.events[eventName] = fn
  }
  publish(eventName) {
    if (this.events[eventName]) {
      return this.events.eventName
    }
    return false
  }
  unsubscribe(eventName: string) {
    const events = this.events[eventName]
    if (events) {
      Reflect.deleteProperty(this.events, eventName)
    }
  }
}

export default new Observer()
