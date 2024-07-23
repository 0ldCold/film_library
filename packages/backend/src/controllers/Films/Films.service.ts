import { AppDataSource } from 'src/database/data-source';
import { NotFoundError } from 'src/helpers/errors';
import { FilmsDTO } from 'src/controllers/Films/Films.DTO';
import { FilmsEntity } from 'src/entities/Films/Films.entity';

export class FilmsService {
  private filmsRepository = AppDataSource.getRepository(FilmsEntity);

  public async getAll(): Promise<FilmsDTO[]> {
    return this.filmsRepository.find();
  }

  public async getOne(filmId: FilmsDTO['id']): Promise<FilmsDTO> {
    const film = await this.filmsRepository.findOne({
      where: { id: filmId },
    });

    if (!film) {
      throw new NotFoundError('Film');
    }
    return film;
  }
}
