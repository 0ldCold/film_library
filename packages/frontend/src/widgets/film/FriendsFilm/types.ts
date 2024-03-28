import { UserFilmsListType } from "src/shared/api/film/filmStatusDropdown/types";

export interface IFilmFriends {
  friend: {
    name: string;
    avatar?: string;
  };
  list: UserFilmsListType;
  rate?: number;
}
