import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

import { CreateUsersTable1713124501156 } from 'src/migrations/1713124501156-CreateUsersTable';
import { CreateFilmsTable1721754925063 } from 'src/migrations/1721754925063-CreateFilmsTable';

export const migrations: BaseDataSourceOptions['migrations'] = [
  CreateUsersTable1713124501156,
  CreateFilmsTable1721754925063,
];
