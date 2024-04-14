import type { Seeder, SeederFactoryManager } from 'typeorm-extension';
import type { DataSource } from 'typeorm';
import { UsersEntity } from './Users.entity';

export class UsersSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository =  dataSource.getRepository(UsersEntity);
    await repository.insert([
      {
        firstName: 'Caleb',
        lastName: 'Barrows',
        email: 'caleb.barrows@gmail.com'
      }
    ]);

    // ---------------------------------------------------

    const userFactory = await factoryManager.get(UsersEntity);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(5);
  }
}
