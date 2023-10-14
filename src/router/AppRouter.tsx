import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useUserStore } from '../stores/user.store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useCheckSessionMutation } from '../http/auth/check-session';

const AppRouter: React.FC = () => {
  const mutation = useCheckSessionMutation();

  useEffect(() => {
    mutation.mutate();
  }, []);

  const publicRoutes = PublicRoutes({}, null);
  const privateRoutes = PrivateRoutes({}, null);

  const id = useUserStore((state) => state.id);

  return mutation.isSuccess ? (
    <BrowserRouter>
      <Routes>
        {!id ? publicRoutes : privateRoutes}
        <Route path="*" element={<Navigate to={!id ? '/login' : '/books'} />} />
      </Routes>
    </BrowserRouter>
  ) : null;
};

export default AppRouter;
