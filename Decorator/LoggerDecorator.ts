import { Logger } from "./logger";

export class LoggerDecorator implements Logger {
    protected logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    log(message: string): void {
        this.logger.log(message);
    }
}