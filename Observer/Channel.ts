import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Channel implements Observable {
    private name: string;
    private subscribers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addSubscriber(observer: Observer): void {
        this.subscribers.push(observer);
    }

    removeSubscriber(observer: Observer): void {
        const index = this.subscribers.indexOf(observer);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notifySubscribers(title: string): void {
        this.subscribers.forEach(subscriber => {
            subscriber.update(title);
        });
    }

    uploadVideo(title: string): void {
        console.log(`New video uploaded on channel ${this.name}: ${title}`);
        this.notifySubscribers(title);
    }
}