import { IwriteLogger } from "../interfaces/IwriteLogger";
import { loggerType } from "../types/types";

class NormalLogger implements IwriteLogger {
    type: loggerType = loggerType.LOG;

    write(msg: string): void {
        console.log(msg);
    }
}

export default NormalLogger;