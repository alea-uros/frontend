export type PaginatedResponseType<T> = {
  total: number;
  rows: T[];
};
