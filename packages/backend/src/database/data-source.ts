import {DataSource} from "typeorm"
import {User} from "../entity/User/User"
import {dbConfig} from "./dbConfig";
import type {SeederOptions} from "typeorm-extension";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const isProd = process.env.NODE_ENV === "production";

export const options: PostgresConnectionOptions & SeederOptions = {
  type: "postgres",
  ...dbConfig,
  synchronize: !isProd,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
