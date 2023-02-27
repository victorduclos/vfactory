import type { Adapter, Class } from '@vfactory/core';
import type { EntityManager } from 'typeorm';

export class TypeORMAdaptor implements Adapter {
  private readonly connection: EntityManager;

  constructor(connection: EntityManager) {
    this.connection = connection;
  }

  persist<Entity extends Record<keyof any, unknown>>(entity: Class<Entity>, properties: Entity): Promise<Entity> {
    // eslint-disable-next-line new-cap
    const newEntity = new entity();

    Object.entries(properties).forEach(([key, value]) => {
      newEntity[key as keyof Entity] = value as any;
    });

    return this.connection.save(newEntity);
  }
}
