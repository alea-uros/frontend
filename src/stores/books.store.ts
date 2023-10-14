import create from 'zustand';
import { BookType } from '../types/book/book.type';

interface BookStore {
  books: BookType[];
  total: number;
  setBooks: (data: BookType[]) => void;
  setTotal: (total: number) => void;
  reset: () => void;
}

const initialState = {
  books: [],
  total: 0,
};

export const useBookStore = create<BookStore>((set) => ({
  ...initialState,
  setBooks: (data: BookType[]) =>
    set((state) => ({ books: [...state.books, ...data] })),
  setTotal: (total: number) => set({ total }),
  reset: () => set(initialState),
}));
