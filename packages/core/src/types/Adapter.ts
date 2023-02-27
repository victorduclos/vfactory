import { Class } from './Class';

export abstract class Adapter {
  abstract persist<Entity extends Record<keyof any, unknown>>(
    entity: Class<Entity>,
    properties: Entity,
  ): Promise<Entity>;
}
