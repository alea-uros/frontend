import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import BookListPage from '../../pages/book/BookListPage';
import BookPage from '../../pages/book/BookPage';
import AddBookPage from '../../pages/book/AddBookPage';

const BookRoutes: FC = () => {
  return (
    <Route path="/books">
      <Route path="" element={<BookListPage />} />
      <Route path="add" element={<AddBookPage />} />
      <Route path=":bookId" element={<BookPage />} />
    </Route>
  );
};

export default BookRoutes;
