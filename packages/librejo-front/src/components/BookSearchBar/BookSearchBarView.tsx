import React, { FC } from 'react';
import Input from '@material-ui/core/Input';

interface Props {
  onSearch(data: any): void;
}

const BookSearchBarView: FC<Props> = ({ onSearch }) => {
  return (
    <div>
      <Input id="standard-basic" onChange={onSearch} />
    </div>
  );
};

export default BookSearchBarView;
