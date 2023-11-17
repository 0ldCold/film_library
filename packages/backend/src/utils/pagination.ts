export interface PaginationQuery {
  take: number;
  skip: number;
}

export interface PagitarionResponce<T> extends PaginationQuery {
  data: T[];
  total: number;
}

export const getPaginatedData = <T>(
  data: T[],
  query: PaginationQuery,
): PagitarionResponce<T> => {
  return {
    take: query.take,
    skip: query.skip,
    total: data.length,
    data: data.slice(query.skip, query.skip + query.take),
  };
};
