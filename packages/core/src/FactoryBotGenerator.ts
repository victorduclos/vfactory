import { FactoryBot } from './FactoryBot';
import { Adapter, LogLevel } from './types';
import { Logger } from './utils/Logger';

export class FactoryBotGenerator {
  private adapter: Adapter | undefined;
  private readonly logger: Logger;

  constructor(options?: { logLevel: LogLevel }) {
    this.logger = new Logger(options?.logLevel);
  }

  setAdapter(adapter: Adapter): Omit<this, 'setAdapter'> {
    this.adapter = adapter;
    return this;
  }

  addFactory(): Omit<this, 'setAdapter'> {
    // TODO
    return this;
  }

  getFactoryBot(): FactoryBot {
    if (!this.adapter) {
      throw new Error('An adapter must set with `setAdapter`');
    }

    // TODO
    return new FactoryBot();
  }
}
