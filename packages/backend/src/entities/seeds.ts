import type { SeederConstructor } from 'typeorm-extension';
import { UsersSeeder } from './Users/Users.seeder';
import { FilmsSeeder } from './Films/Films.seeder';

export const seeds: SeederConstructor[] = [UsersSeeder, FilmsSeeder];
