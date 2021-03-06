// Generated by dts-bundle v0.7.3

export class ClusterWS {
    options: IOptions;
    channels: IObject;
    websocket: WebSocket;
    constructor(configuration: IUserOptions);
    create(): void;
    on(event: string, listener: TListener): void;
    send(event: string, data: any, type?: string): void;
    disconnect(code?: number, msg?: any): void;
    getState(): number;
    subscribe(channel: string): void;
    getChannelByName(channelName: string): Channel;
}

export class Channel {
    constructor(socket: ClusterWS, channel: string);
    watch(listener: TListener): Channel;
    publish(data: any): Channel;
    unsubscribe(): void;
    onMessage(data: any): void;
    subscribe(): void;
}

export class Reconnection {
    socket: ClusterWS;
    inReconnectionState: boolean;
    constructor(socket: ClusterWS);
    isConnected(): void;
    reconnect(): void;
}

export class EventEmitter {
    on(event: string, listener: TListener): void;
    emit(event: string, ...args: any[]): void;
    removeAllEvents(): void;
}

export type TListener = (...args: any[]) => void;
export type TSocketMessage = any;
export interface IObject {
    [propName: string]: any;
}
export interface IUserOptions {
    url: string;
    port: number;
    autoReconnect?: boolean;
    reconnectionIntervalMin?: number;
    reconnectionIntervalMax?: number;
    reconnectionAttempts?: number;
    secure?: boolean;
}
export interface IOptions {
    url: string;
    port: number;
    autoReconnect: boolean;
    reconnectionIntervalMin: number;
    reconnectionIntervalMax: number;
    reconnectionAttempts: number;
    secure: boolean;
}
export function logError<T>(data: T): any;

