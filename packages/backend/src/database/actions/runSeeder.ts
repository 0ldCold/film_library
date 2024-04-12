import { runSeeders } from 'typeorm-extension';
import {AppDataSource} from "../data-source";
import {seeders} from "../../entity/seeders";
import {factories} from "../../entity/factories";

const seedDb = async (): Promise<void> => {
  await AppDataSource.initialize();

  await runSeeders(AppDataSource, {
    factories: factories,
    seeds: seeders,
    seedTracking: true,
  });
}

seedDb().then(() => {
  console.log("DB seeded successfully.");
  process.exit(0);
})
