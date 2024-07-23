import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKeys, QueryKeys } from "src/shared/api/queryKeys";
import { removeUser } from "src/shared/api/users/endpoints";
import { getResponseData } from "src/shared/api/helpers";

export const useRemoveUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MutationKeys.USERS_REMOVE],
    mutationFn: (userId: number) => getResponseData(removeUser(userId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USERS_LIST] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USERS_ITEM] });
    }
  });
};
