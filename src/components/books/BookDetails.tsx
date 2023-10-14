import { FC } from 'react';
import { BookType } from '../../types/book/book.type';
import { BookTypeMap } from '../../types/map/book/book-type.map';
import BookRating from './BookRating';

const BookDetails: FC<{ book: BookType }> = (props) => {
  const { book } = props;

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

      <BookRating disabled={true} readOnly={true} value={book.averageRating} />

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
