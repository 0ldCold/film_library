import { UserFilmsListType } from "src/shared/api/film/filmStatusDropdown/types";
import { USER_LISTS } from "src/features/film/FilmStatusDropdown/constants";

export const viewingStatus = (FilmStatus: UserFilmsListType, rate: number) => {
  const filmsList = USER_LISTS.find((filmList) => filmList.type == FilmStatus);
  return `${filmsList?.name}${!Number.isNaN(rate) ? ` - ${rate}` : ""}`;
};
