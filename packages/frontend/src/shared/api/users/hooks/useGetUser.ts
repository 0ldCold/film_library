import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'src/shared/api/queryKeys';
import { getUser } from 'src/shared/api/users/endpoints';
import { getResponseData } from 'src/shared/api/helpers';

export const useGetUser = (userId: number, enabled = true) => {
  return useQuery({
    queryKey: [QueryKeys.USERS_ITEM],
    queryFn: () => getResponseData(getUser(userId)),
    enabled,
  });
};
