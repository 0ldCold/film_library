import { setSeederFactory } from 'typeorm-extension';
import { FilmsEntity } from './Films.entity';

export const FilmsFactory = setSeederFactory(FilmsEntity, (faker) => {
  const film = new FilmsEntity();
  film.name = faker.word.noun();

  return film;
});
