import type { SeederFactoryItem } from 'typeorm-extension';

import { UsersFactory } from './Users/Users.factory';
import { FilmsFactory } from './Films/Films.factory';

export const factories: SeederFactoryItem[] = [UsersFactory, FilmsFactory];
