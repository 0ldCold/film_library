import { isExist } from 'src/shared/helpers/isExist';

export type QueryId = string | string[] | undefined;

export const checkId = (id: QueryId): id is string => {
  if (!isExist(id) || typeof id !== 'string' || Number.isNaN(+id)) return false;
  return true;
};

export const transformQueryId = (queryId: QueryId): number | undefined => {
  if (!checkId(queryId)) {
    return undefined;
  }
  return +queryId;
};
