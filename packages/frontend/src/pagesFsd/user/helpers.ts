import { isExist } from "src/shared/helpers/isExist";

export type QueryUserId = string | string[] | undefined;

export const checkUserId = (id: QueryUserId): id is string => {
  if (!isExist(id) || typeof id !== "string" || Number.isNaN(+id)) return false;
  return true;
};

export const transformQueryId = (queryId: QueryUserId): number | undefined => {
  if (!checkUserId(queryId)) {
    return undefined;
  }
  return +queryId;
};
