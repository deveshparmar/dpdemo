import { LoggerDecorator } from "./loggerDecorator";

export class WarningLoggerDecorator extends LoggerDecorator {
    log(message: string): void {
      message = `WARNING: ${message}`;
      super.log(message);
    }
  }