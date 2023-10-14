import { FC } from 'react';
import { Rating } from '@mui/material';

const BookRating: FC<{
  onChange?: (e: React.SyntheticEvent, value: number | null) => void;
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
