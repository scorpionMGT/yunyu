/*
 * @Email: 1142656486@qq.com
 * @Version: v1.0.0
 * @LastEditors: maoguotao
 * @Date: 2019-12-05 14:20:06
 * @LastEditTime: 2019-12-05 16:13:14
 */



interface eventNameFunc {
    (...items: any[]): any
}

interface EventList {
    [eventName: string]: eventNameFunc,
}

class Observer {
    protected readonly eventList: EventList
    constructor(eventList = {}) {
        this.eventList = eventList
    }
    subscribe(eventName: string, callback: eventNameFunc) {
        if (!Reflect.has(this.eventList, eventName)) {
            this.eventList[eventName] = callback
        }
    }
    publish(eventName: string) {
        if (Reflect.has(this.eventList, eventName)) this.eventList[eventName]()
    }
    remove(eventName: string) {
        Reflect.deleteProperty(this.eventList, eventName)
    }
}

export default new Observer()