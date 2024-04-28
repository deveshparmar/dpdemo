import { LoggerDecorator } from "./loggerDecorator";

export class ErrorLoggerDecorator extends LoggerDecorator {
    log(message: string): void {
        message = `ERROR: ${message}`;
        super.log(message);
    }
}