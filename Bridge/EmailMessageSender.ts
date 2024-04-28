import { IMessageSender } from "./IMessageSender";

export class EmailMessageSender implements IMessageSender {
    sendMessage(message: string): void {
        console.log("Sending email message...", message);
    }
}