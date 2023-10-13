import { FC } from 'react';
import { Box, Container } from '@mui/material';
import { useUserStore } from '../../stores/user.store';

const Header: FC = () => {
  const email = useUserStore((state) => state.email);

  return (
    <Container>
      <Box alignSelf="end">
        <p>Logged in as: {email}</p>
      </Box>
    </Container>
  );
};
