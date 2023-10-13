import React, { useState } from 'react';
import { LoginPayloadType } from '../../types/login/login-payload.type';
import { Button, TextField } from '@mui/material';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginPayloadType>({
    email: '',
    password: '',
  });
  const handleSubmit = () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default RegistrationForm;
