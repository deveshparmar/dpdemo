import { Observer } from "./Observer";

export interface Observable {
    addSubscriber(observer: Observer): void;
    removeSubscriber(observer: Observer): void;
    notifySubscribers(title: string): void;
}
