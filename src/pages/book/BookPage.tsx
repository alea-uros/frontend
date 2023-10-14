import { FC } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../http/book/get-book-by-id';
import BookDetails from '../../components/books/BookDetails';
import PrivateLayout from '../layout/PrivateLayout';

const BookPage: FC = () => {
  const { bookId } = useParams();

  const { data, isLoading } = useGetBookByIdQuery(bookId as string);

  return (
    <PrivateLayout>
      {data && data.id == bookId ? (
        <Box>
          <BookDetails book={data}></BookDetails>
        </Box>
      ) : (
        <h2>Not Found</h2>
      )}
    </PrivateLayout>
  );
};

export default BookPage;
