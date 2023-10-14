import { useMutation } from '@tanstack/react-query';
import { rateBook } from '../../services/book/book.service';

export const useRateBookMutation = () => {
  return useMutation(['rateBook'], rateBook);
};
