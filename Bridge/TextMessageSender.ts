import { IMessageSender } from "./IMessageSender";

export class TextMessageSender implements IMessageSender {
    sendMessage(message: string): void {
        console.log("Sending text message...", message);
    }
}