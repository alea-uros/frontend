import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Link } from '@mui/material';
import RegistrationForm from '../../components/registration-form/RegistrationForm';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="xs">
      <Box>
        <h1>Register</h1>
        <RegistrationForm />
      </Box>
      <Box>
        <Link onClick={redirect}>Already have an account? Click here.</Link>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
