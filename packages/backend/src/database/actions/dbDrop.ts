import 'reflect-metadata';
import { AppDataSource } from '../data-source';

const dropDb = async (): Promise<void> => {
  AppDataSource.setOptions({ ...AppDataSource.options, synchronize: false });
  await AppDataSource.initialize();
  await AppDataSource.dropDatabase();
};

await dropDb();
console.log('DB dropped successfully.');
process.exit(0);
