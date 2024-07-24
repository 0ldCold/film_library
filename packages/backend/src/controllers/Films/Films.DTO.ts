/**
 * Стандартная DTO фильма
 * @tsoaModel
 */
export interface FilmsDTO {
  /**
   * @isInt
   */
  id: number;

  name: string;
}

/**
 * Данные для создания или редактирования фильма
 * @tsoaModel
 */
export interface UserCreationParams extends Pick<FilmsDTO, 'name'> {}
