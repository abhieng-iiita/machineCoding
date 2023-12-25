import { ILogger } from "./interfaces/ILogger";
import Logger from "./logger";

const logger: ILogger = new Logger();

logger.info("pokemon");
logger.warn("nartuo");
logger.log("Hello");
