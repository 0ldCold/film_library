import {
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator'

export interface TPaginationQuery {
  take: number;
  skip: number;
}

export class PaginationQuery implements TPaginationQuery{
  @IsNumber()
  take: number;

  @IsNumber()
  skip: number;
}

export interface PagitarionResponce<T> extends TPaginationQuery {
  data: T[];
  total: number;
}

export const getPaginatedData = <T>(
  data: T[],
  query: TPaginationQuery,
): PagitarionResponce<T> => {
  return {
    take: query.take,
    skip: query.skip,
    total: data.length,
    data: data.slice(query.skip, query.skip + query.take),
  };
};
