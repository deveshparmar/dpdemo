import { Observer } from "./Observer";

export class Subscriber implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(title: string): void {
        console.log(`Hey ${this.name}, New Video Uploaded on channel: ${title}`);
    }
}