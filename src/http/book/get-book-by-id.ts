import { useQuery } from '@tanstack/react-query';
import { getBookById } from '../../services/book/book.service';

export const useGetBookByIdQuery = (id: string) => {
  return useQuery(['getBookById'], () => getBookById(id), {
    keepPreviousData: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: 0,
  });
};
