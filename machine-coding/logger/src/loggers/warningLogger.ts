import { IwriteLogger } from "../interfaces/IwriteLogger";
import { loggerType } from "../types/types";

class WarningLogger implements IwriteLogger {
    type: loggerType = loggerType.WARNING;

    write(msg: string): void {
        console.warn(msg);
    }
}

export default WarningLogger;