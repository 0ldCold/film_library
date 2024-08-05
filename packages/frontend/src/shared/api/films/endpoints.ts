import { BackendResponseWrapper } from "src/shared/api/types";
import { instance } from "src/shared/api/instance";

export const getMovie = (
  movieId: number,
): Promise<BackendResponseWrapper<Components.Schemas.FilmsDTO>> => {
  return instance.get(`films/${movieId}`);
};
