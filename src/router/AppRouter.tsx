import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useUserStore } from '../stores/user.store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRouter: React.FC = () => {
  const { id } = useUserStore();

  const publicRoutes = PublicRoutes({}, null);
  const privateRoutes = PrivateRoutes({}, null);

  return (
    <BrowserRouter>
      <Routes>
        {!id ? publicRoutes : privateRoutes}
        <Route path="*" element={<Navigate to={!id ? '/login' : '/books'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
