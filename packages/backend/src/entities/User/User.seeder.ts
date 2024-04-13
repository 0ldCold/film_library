import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { UserEntity } from './User.entity';

export class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository =  dataSource.getRepository(UserEntity);
    await repository.insert([
      {
        firstName: 'Caleb',
        lastName: 'Barrows',
        email: 'caleb.barrows@gmail.com'
      }
    ]);

    // ---------------------------------------------------

    const userFactory = await factoryManager.get(UserEntity);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(5);
  }
}
