import { loggerType } from "../types/types";

interface IwriteLogger {
    type: loggerType,
    write: (msg: string) => void;
};

export {
    IwriteLogger
};
