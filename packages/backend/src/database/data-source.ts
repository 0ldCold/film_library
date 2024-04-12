import {DataSource} from "typeorm"
import {User} from "../entity/User/User"
import {dbConfig} from "./dbConfig";
import type {SeederOptions} from "typeorm-extension";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

export const options: PostgresConnectionOptions & SeederOptions = {
  type: "postgres",
  ...dbConfig,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],

  seeds: ['src/entity/**/*.seeder.ts'],
  factories: ['src/entity/**/*.factory.ts'],

};

export const AppDataSource = new DataSource(options);
