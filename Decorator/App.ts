import { ErrorLoggerDecorator } from "./ErrorLoggerDecorator";
import { WarningLoggerDecorator } from "./WarningLoggerDecorator";
import { ConsoleLogger } from "./consoleLogger";
import { Logger } from "./logger";

const logger: Logger = new ConsoleLogger();
const loggerWithWarning: Logger = new WarningLoggerDecorator(logger);
const loggerWithError: Logger = new ErrorLoggerDecorator(logger);

logger.log("This is a normal log message.");
loggerWithWarning.log("This is a warning message.");
loggerWithError.log("This is an error message.");