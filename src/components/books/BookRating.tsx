import { FC } from 'react';
import { Rating } from '@mui/material';

const BookRating: FC<{
  onChange?: () => void;
  disabled: boolean;
  readOnly: boolean;
  value: number;
}> = (props) => {
  const { readOnly, onChange, value, disabled } = props;
  return (
    <Rating
      precision={0.1}
      onChange={onChange}
      disabled={disabled}
      value={value}
      readOnly={readOnly}
    />
  );
};

export default BookRating;
