import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { UsersEntity } from './Users/Users.entity';
import { FilmsEntity } from './Films/Films.entity';

export const entities: BaseDataSourceOptions['entities'] = [UsersEntity, FilmsEntity];
