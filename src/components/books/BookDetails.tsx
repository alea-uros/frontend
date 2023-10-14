import React, { FC, useEffect } from 'react';
import { BookType } from '../../types/book/book.type';
import { BookTypeMap } from '../../types/map/book/book-type.map';
import BookRating from './BookRating';
import { useUserStore } from '../../stores/user.store';
import { useRateBookMutation } from '../../http/book/rate-book';
import { useQueryClient } from '@tanstack/react-query';

const BookDetails: FC<{ book: BookType }> = (props) => {
  const { book } = props;
  const id = useUserStore((state) => state.id);
  const mutation = useRateBookMutation();
  const queryClient = useQueryClient();

  const rateBook = (e: React.SyntheticEvent, value: number | null) => {
    if (value) {
      mutation.mutate({
        id: book.id,
        value,
      });
    }
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['getBookById'] });
    }
  }, [mutation.isSuccess]);

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

      {book?.ratings?.some((r) => r.userId === id) ? (
        <>
          <div style={{ display: 'flex' }}>
            Average rating:{' '}
            <BookRating
              disabled={false}
              readOnly={true}
              value={book.averageRating}
            />
          </div>
          <div style={{ display: 'flex' }}>
            Your rating:{' '}
            <BookRating
              disabled={false}
              readOnly={true}
              value={book.ratings[0].value}
            />
          </div>
        </>
      ) : (
        <div style={{ display: 'flex' }}>
          Rate this:{' '}
          <BookRating
            disabled={false}
            readOnly={false}
            value={book.averageRating}
            onChange={rateBook}
          />
        </div>
      )}

      <p>
        <b>Type: </b>
        {BookTypeMap[book.type]}
      </p>

      <ul>
        {book.actors.map((actor) => (
          <li>
            <b>{actor.name}</b>
          </li>
        ))}
      </ul>

      <p>{book.description}</p>
    </>
  );
};

export default BookDetails;
