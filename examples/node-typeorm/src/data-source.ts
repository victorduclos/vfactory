import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 54325,
  username: 'postgres',
  password: '5050',
  database: 'typeorm',
  synchronize: false,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: ['./src/migrations/*.ts']
});
