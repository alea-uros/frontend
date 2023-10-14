import React, { FC, useState } from 'react';
import PrivateLayout from '../layout/PrivateLayout';
import BooksList from '../../components/books/BooksList';
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useBookStore } from '../../stores/books.store';
import { BookTypeEnum } from '../../enum/book/book-type.enum';
import { SearchBooksType } from '../../types/book/search-books.type';

const BookListPage: FC = () => {
  const total = useBookStore((state) => state.total);
  const [searchFilter, setSearchFilter] = useState<SearchBooksType>({
    type: BookTypeEnum.Book,
    page: 1,
    limit: 2,
    query: '',
  });

  const showMore = () => {
    setSearchFilter((previousValue) => {
      return { ...previousValue, page: ++previousValue.page };
    });
  };

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length >= 3 || !value) {
      setSearchFilter((previousValue) => {
        return { ...previousValue, query: value, page: 1 };
      });
    }
  };

  const selectType = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setSearchFilter((previousValue) => {
      return { ...previousValue, type: parseInt(value), page: 1 };
    });
  };

  return (
    <PrivateLayout>
      <h1>Search books or comics</h1>
      <TextField
        fullWidth={true}
        placeholder={'Search...'}
        onChange={search}
      ></TextField>
      <RadioGroup
        style={{ width: '100px' }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={selectType}
      >
        <FormControlLabel
          key={BookTypeEnum.Book}
          defaultChecked={false}
          value={BookTypeEnum.Book}
          control={<Radio />}
          label="Books"
        />
        <FormControlLabel
          key={BookTypeEnum.Comic}
          defaultChecked={true}
          value={BookTypeEnum.Comic}
          control={<Radio />}
          label="Comics"
        />
      </RadioGroup>
      <BooksList filter={searchFilter}></BooksList>
      <Button
        style={{
          padding: '10px 20px',
          border: '1px solid black',
          marginTop: '30px',
          marginBottom: '50px',
        }}
        onClick={showMore}
        disabled={Math.ceil(total / searchFilter.limit) <= searchFilter.page}
      >
        Show More
      </Button>
    </PrivateLayout>
  );
};

export default BookListPage;
