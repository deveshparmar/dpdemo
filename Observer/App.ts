import { Channel } from "./Channel";
import { Subscriber } from "./Subscriber";


const channel = new Channel("EI");

const sub1 = new Subscriber("sub1");
const sub2 = new Subscriber("sub2");
const sub3 = new Subscriber("sub3");
const sub4 = new Subscriber("sub4");
const sub5 = new Subscriber("sub5");

channel.addSubscriber(sub1);
channel.addSubscriber(sub2);
channel.addSubscriber(sub3);
channel.addSubscriber(sub4);

channel.uploadVideo("EI Dialogues EP1");

channel.removeSubscriber(sub4);

channel.uploadVideo("EI Dialogues EP2");