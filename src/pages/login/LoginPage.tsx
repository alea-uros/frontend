import { Box, Container, Link } from '@mui/material';
import React, { FC } from 'react';
import LoginForm from '../../components/login-form/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/register');
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Box>
          <h1>Login</h1>
          <LoginForm />
        </Box>
        <Box>
          <Link onClick={redirect}>Don't have an account? Click here.</Link>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
