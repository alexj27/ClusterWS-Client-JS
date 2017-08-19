import { socketMessages } from '../communication/messages'

export class Channel {
    event: any

    constructor(public channel: string, public send: any) {
        this.subscribe()
    }

    watch(fn: any) {
        this.event = fn
        return this
    }

    publish(data: any) {
        this.send(socketMessages(this.channel, data, 'publish'))
        return this
    }

    unsubscribe() {
        this.send(socketMessages('u', this.channel, 'system'))
    }

    subscribe() {
        this.send(socketMessages('s', this.channel, 'system'))
    }
}