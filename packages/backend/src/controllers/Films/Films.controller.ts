import { Controller, Get, Path, Route, Response } from 'tsoa';
import type { NotFoundErrorJSON } from 'src/middlewares/error/types';
import { FilmsDTO } from 'src/controllers/Films/Films.DTO';
import { FilmsService } from 'src/controllers/Films/Films.service';

@Route('films')
export class FilmsController extends Controller {
  /**
   * @summary Получение списка фильмов
   */
  @Get()
  public async listFilms(): Promise<FilmsDTO[]> {
    return new FilmsService().getAll();
  }

  /**
   * @summary Получение указанного фильма
   * @param filmId
   */
  @Response<NotFoundErrorJSON>(404, 'Not found')
  @Get('{filmId}')
  public async getFilm(@Path() filmId: FilmsDTO['id']): Promise<FilmsDTO> {
    return new FilmsService().getOne(filmId);
  }
}
