import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../../pages/login/LoginPage';
import RegistrationPage from '../../pages/registration/RegistrationPage';

const BookRoutes: FC = () => {
  return (
    <Route path="/books">
      <Route path="" element={<LoginPage />} />
      <Route path="add" element={<LoginPage />} />
      <Route path=":bookId" element={<RegistrationPage />} />
    </Route>
  );
};

export default BookRoutes;
