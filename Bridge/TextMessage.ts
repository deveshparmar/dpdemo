import { IMessageSender } from "./IMessageSender";
import { Message } from "./Message";

export class TextMessage extends Message {
    constructor(messageSender: IMessageSender) {
        super(messageSender);
    }

    send(message: string): void {
        this.messageSender.sendMessage(message);
    }
}