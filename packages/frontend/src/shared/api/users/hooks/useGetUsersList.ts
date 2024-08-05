import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "src/shared/api/queryKeys";
import { getUsers } from "src/shared/api/users/endpoints";
import { getResponseData } from "src/shared/api/helpers";

export const useGetUsersList = () => {
  return useQuery({
    queryKey: [QueryKeys.USERS_LIST],
    queryFn: () => getResponseData(getUsers()),
  });
};
