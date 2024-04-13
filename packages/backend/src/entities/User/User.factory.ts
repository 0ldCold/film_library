import { setSeederFactory } from 'typeorm-extension';
import { UserEntity } from './User.entity';

export const UserFactory = setSeederFactory(UserEntity, (faker) => {
  const user = new UserEntity();
  user.firstName = faker.person.firstName('male');
  user.lastName = faker.person.lastName('male');
  user.email = faker.internet.email({
    firstName: user.firstName, lastName: user.lastName
  });

  return user;
})
