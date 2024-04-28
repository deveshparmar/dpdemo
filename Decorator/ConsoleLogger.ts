import { Logger } from "./logger";

// Concrete Logger implementation
export class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}