import { useMutation } from '@tanstack/react-query';
import { addBook } from '../../services/book/book.service';

export const useAddBookMutation = () => {
  return useMutation(['addBook'], addBook);
};
