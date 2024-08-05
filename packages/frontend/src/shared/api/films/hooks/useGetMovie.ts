import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'src/shared/api/queryKeys';
import { getResponseData } from 'src/shared/api/helpers';
import { getMovie } from 'src/shared/api/films/endpoints';

export const useGetMovie = (movieId: number, enabled = true) => {
  return useQuery({
    queryKey: [QueryKeys.MOVIE_ITEM],
    queryFn: () => getResponseData(getMovie(movieId)),
    enabled,
  });
};
