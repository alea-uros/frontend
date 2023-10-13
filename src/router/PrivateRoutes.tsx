import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import BookRoutes from './book/BookRoutes';

const PrivateRoutes: FC = () => {
  return (
    <>
      <Route element={<BookRoutes />}></Route>
    </>
  );
};

export default PrivateRoutes;
