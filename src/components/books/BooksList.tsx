import { FC, useEffect } from 'react';
import { useBookStore } from '../../stores/books.store';
import { Box, Container } from '@mui/material';
import { useSearchBooksQuery } from '../../http/book/search-books';
import { SearchBooksType } from '../../types/book/search-books.type';
import BookCard from './BookCard';

const BooksList: FC<{ filter: SearchBooksType }> = (props) => {
  const { books, total, reset } = useBookStore();

  const { data, isLoading } = useSearchBooksQuery(props.filter);

  useEffect(() => {
    reset();
  }, [props.filter.type, props.filter.query]);

  return isLoading ? null : (
    <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
      {books.map((book) => (
        <Box
          key={book.id}
          style={{
            flexBasis: '25%',
            border: '1px solid',
            padding: '20px 30px',
          }}
        >
          <BookCard book={book}></BookCard>
        </Box>
      ))}
    </Container>
  );
};

export default BooksList;
