import { FC } from 'react';
import { Box, Button, Container } from '@mui/material';
import { useUserStore } from '../../stores/user.store';
import { useLogoutMutation } from '../../http/auth/logout';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const email = useUserStore((state) => state.email);
  const mutation = useLogoutMutation();
  const navigate = useNavigate();
  const searchBooks = () => {
    navigate('/books');
  };

  const addBook = () => {
    navigate('/books/add');
  };

  const logout = () => {
    mutation.mutate();
  };

  return (
    <Container style={{ background: '#ccc', padding: '15px' }}>
      <Box justifyContent="flex-end">
        <p>Logged in as: {email}</p>
        <Button
          onClick={logout}
          style={{
            border: '1px solid black',
            background: 'blue',
            color: 'white',
          }}
        >
          Logout
        </Button>
        <Button
          onClick={addBook}
          style={{
            border: '1px solid black',
            marginLeft: '20px',
            background: 'blue',
            color: 'white',
          }}
        >
          Add Book
        </Button>
        <Button
          onClick={searchBooks}
          style={{
            border: '1px solid black',
            marginLeft: '20px',
            background: 'blue',
            color: 'white',
          }}
        >
          Search Books
        </Button>
      </Box>
    </Container>
  );
};

export default Header;
