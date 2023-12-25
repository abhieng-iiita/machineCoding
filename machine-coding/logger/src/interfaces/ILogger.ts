interface ILogger {
  warn: (msg: string) => void;
  log: (msg: string) => void;
  info: (msg: string) => void;
}

export { ILogger };
