import { LogLevel } from '../types';

export class Logger {
  private readonly logLevel: LogLevel;

  constructor(logLevel?: LogLevel) {
    this.logLevel = logLevel || 'error';
  }

  log(data: unknown[]): void {
    console.log(...data);
  }

  error(data: unknown[]): void {
    if (this.logLevel === 'info') return;
    console.log(...data);
  }
}
