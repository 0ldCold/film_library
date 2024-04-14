import 'reflect-metadata';
import { runSeeders } from 'typeorm-extension';
import { AppDataSource } from '../data-source';
import { seeds } from 'src/entities/seeds';
import { factories } from 'src/entities/factories';

const seedDb = async (): Promise<void> => {
  await AppDataSource.initialize();

  await runSeeders(AppDataSource, {
    factories: factories,
    seeds: seeds,
    seedTracking: true,
  });
};

await seedDb();
console.log('DB seeded successfully.');
process.exit(0);
