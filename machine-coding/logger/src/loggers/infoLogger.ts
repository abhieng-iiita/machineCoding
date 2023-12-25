import { IwriteLogger } from "../interfaces/IwriteLogger";
import { loggerType } from "../types/types";

class InfoLogger implements IwriteLogger {
    type: loggerType = loggerType.INFO;

    write(msg: string): void {
        console.info(msg);
    }
}

export default InfoLogger;