import { loggerType } from "./types/types";
import InfoLogger from "./loggers/infoLogger";
import WarningLogger from "./loggers/warningLogger";
import NormalLogger from "./loggers/normalLogger";
import { IwriteLogger } from "./interfaces/IwriteLogger";
import { ILogger } from "./interfaces/ILogger";

class Logger implements ILogger {
  private loggers: Map<loggerType, IwriteLogger>;

  constructor() {
    this.intialize();
  }

  private intialize(): void {
    this.loggers = new Map();
    this.loggers.set(loggerType.LOG, new NormalLogger());
    this.loggers.set(loggerType.WARNING, new WarningLogger());
    this.loggers.set(loggerType.INFO, new InfoLogger());
  }

  warn(msg: string) {
    this.loggers.get(loggerType.WARNING).write(msg);
  }

  log(msg: string) {
    this.loggers.get(loggerType.LOG).write(msg);
  }

  info(msg: string) {
    this.loggers.get(loggerType.INFO).write(msg);
  }
}

export default Logger;
