import { useQuery } from '@tanstack/react-query';
import { useBookStore } from '../../stores/books.store';
import { searchBooks } from '../../services/book/book.service';
import { SearchBooksType } from '../../types/book/search-books.type';

export const useSearchBooksQuery = (filers: SearchBooksType) => {
  const { setBooks, setTotal } = useBookStore((state) => ({
    setBooks: state.setBooks,
    setTotal: state.setTotal,
  }));

  return useQuery(['searchBooks', filers], () => searchBooks(filers), {
    onSuccess: (data) => {
      setBooks(data.rows);
      setTotal(data.total);
    },
    keepPreviousData: true,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
