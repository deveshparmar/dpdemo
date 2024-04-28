import { IMessageSender } from "./IMessageSender";

export abstract class Message {
    protected messageSender: IMessageSender;

    constructor(messageSender: IMessageSender) {
        this.messageSender = messageSender;
    }

    abstract send(message: string): void;
}