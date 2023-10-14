import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import BookRoutes from './book/BookRoutes';

const PrivateRoutes: FC = () => {
  const bookRoutes = BookRoutes({});

  return (
    <>
      <Route>{bookRoutes}</Route>
    </>
  );
};

export default PrivateRoutes;
