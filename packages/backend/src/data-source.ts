import {DataSource} from "typeorm"
import {User} from "./entity/User"
import type {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {isExist} from "./helpers/isExist";

type ValidDbConfig = Pick<PostgresConnectionOptions, 'host' | 'port' | 'username' | 'password' | 'database'>;
type DbConfigFormEnv = Record<keyof ValidDbConfig, string | undefined>;
const checkValidConfig = (envConfig: DbConfigFormEnv): envConfig is Record<keyof ValidDbConfig, string> => {
  return isExist(envConfig) &&
    isExist(envConfig.host) &&
    isExist(envConfig.port) &&
    !Number.isNaN(+envConfig.port) &&
    isExist(envConfig.username) &&
    isExist(envConfig.password) &&
    isExist(envConfig.database)
}

const dbConfig: DbConfigFormEnv = {
  host: process.env.VITE_DB_HOST,
  port: process.env.VITE_DN_PORT,
  username: process.env.VITE_DB_USERNAME,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB_NAME,
}
if (!checkValidConfig(dbConfig)) {
  throw new Error("Проверьте содержимое .env файла. " +
    "Если его нету - создайте с содержимым из .env.example и отредактируйте");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  ...dbConfig,
  port: +dbConfig.port,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
