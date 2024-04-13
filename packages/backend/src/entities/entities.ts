import type {BaseDataSourceOptions} from "typeorm/data-source/BaseDataSourceOptions";
import {UserEntity} from "./User/User.entity";

export const entities: BaseDataSourceOptions['entities'] = [UserEntity];
