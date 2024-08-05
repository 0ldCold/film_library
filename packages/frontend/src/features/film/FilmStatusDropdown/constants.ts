import { UserFilmsListType } from '../../../shared/api/film/types';

type FilmStatus = {
  type: UserFilmsListType;
  name: string;
};
export const USER_LISTS: FilmStatus[] = [
  {
    type: 'watched',
    name: 'Просмотрено',
  },
  {
    type: 'dropped',
    name: 'Брошено',
  },

  {
    type: 'paused',
    name: 'Отложено',
  },

  {
    type: 'planned',
    name: 'Запланировано',
  },
  {
    type: 'reviewed',
    name: 'Пересматриваю',
  },

  {
    type: 'watching',
    name: 'Смотрю',
  },

  {
    type: null,
    name: 'Удалить из списка',
  },
];
