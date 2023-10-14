import React, { FC } from 'react';
import { BookType } from '../../types/book/book.type';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BookTypeMap } from '../../types/map/book/book-type.map';
import BookRating from './BookRating';

const BookCard: FC<{ book: BookType }> = (props) => {
  const { book } = props;
  const navigate = useNavigate();
  const redirect = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <>
      <h3>{book.title}</h3>
      <p>
        <i>Release Date: {book.releaseDate}</i>
      </p>

      <img
        style={{ maxWidth: '100%' }}
        className="card-img-top"
        src={'data:image/png;base64,' + book.coverImage}
        alt="Book Cover Image"
      />

      <BookRating disabled={false} readOnly={true} value={book.averageRating} />

      <p>
        <b>Type: </b>
        {BookTypeMap[book.type]}
      </p>
      <p>{book.description}</p>

      <Button
        style={{
          padding: '10px 20px',
          borderRadius: '10px',
          background: 'blue',
          color: 'white',
        }}
        onClick={() => redirect(book.id)}
      >
        Details
      </Button>
    </>
  );
};

export default BookCard;
