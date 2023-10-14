import { FC } from 'react';
import PrivateLayout from '../layout/PrivateLayout';
import AddBookForm from '../../components/books/AddBookForm';

const AddBookPage: FC = () => {
  return (
    <PrivateLayout>
      <h1>Add a new Book</h1>
      <AddBookForm></AddBookForm>
    </PrivateLayout>
  );
};

export default AddBookPage;
