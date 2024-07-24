import type { Seeder, SeederFactoryManager } from 'typeorm-extension';
import type { DataSource } from 'typeorm';
import { FilmsEntity } from './Films.entity';

export class FilmsSeeder implements Seeder {
  public async run(_: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const userFactory = factoryManager.get(FilmsEntity);
    await userFactory.saveMany(10);
  }
}
