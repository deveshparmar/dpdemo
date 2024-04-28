import { EmailMessage } from "./EmailMessage";
import { EmailMessageSender } from "./EmailMessageSender";
import { TextMessage } from "./TextMessage";
import { TextMessageSender } from "./TextMessageSender";

const textMessageSender = new TextMessageSender();
const emailMessageSender = new EmailMessageSender();

const textMessage = new TextMessage(textMessageSender);
textMessage.send("Hello - Text Message");

const emailMessage = new EmailMessage(emailMessageSender);
emailMessage.send("Hello - Email Message");
