import { BookTypeEnum } from '../../enum/book/book-type.enum';

export type SearchBooksType = {
  type: BookTypeEnum;
  query?: string;
  limit: number;
  page: number;
};
