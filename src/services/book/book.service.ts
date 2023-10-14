import HttpService from '../http/http.service';
import { AxiosResponse } from 'axios/index';
import { SearchBooksType } from '../../types/book/search-books.type';
import { PaginatedResponseType } from '../../types/common/paginated-response.type';
import { BookType } from '../../types/book/book.type';
import { AddBookPayloadType } from '../../types/book/add-book-payload.type';

export const searchBooks = async (
  data: SearchBooksType,
): Promise<PaginatedResponseType<BookType>> => {
  const httpClient = new HttpService();
  const queryString = httpClient.qs.stringify(data);
  const path = httpClient.url.build('/books');
  const url = HttpService.combine(path, queryString);
  const response: AxiosResponse = await httpClient.get(url, data);
  return response.data;
};

export const getBookById = async (id: string): Promise<BookType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build(`/books/${id}`);
  const response: AxiosResponse = await httpClient.get(path, {});
  return response.data;
};

export const addBook = async (data: AddBookPayloadType): Promise<BookType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build('/books');
  const response: AxiosResponse = await httpClient.post(path, data, {});
  return response.data;
};

export const rateBook = async (data: {
  id: string;
  value: number;
}): Promise<BookType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build(`/books/${data.id}/rate`);
  const response: AxiosResponse = await httpClient.post(
    path,
    {
      value: data.value,
    },
    {},
  );
  return response.data;
};
