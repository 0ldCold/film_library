import { DataSource } from 'typeorm';
import { dbConfig } from './dbConfig';
import type { SeederOptions } from 'typeorm-extension';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { entities } from 'src/entities/entities';

const isProd = process.env.NODE_ENV === 'production';

export const options: PostgresConnectionOptions & SeederOptions = {
  type: 'postgres',
  ...dbConfig,
  synchronize: !isProd,
  logging: false,
  entities: entities,
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
