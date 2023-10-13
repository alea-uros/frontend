import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import RegistrationPage from '../pages/registration/RegistrationPage';

const PublicRoutes: FC = () => {
  return (
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </>
  );
};

export default PublicRoutes;
