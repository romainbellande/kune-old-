import React, { FC } from 'react';
import debounce from 'lodash/debounce';

import BookSearchBarView from './BookSearchBarView';
import { searchBook } from 'src/common/services/books.service';
import { VolumesResponse } from 'src/common/interfaces/volume/volume.interface';

interface Props {
  onChange(books: VolumesResponse, searchTerms: string): void;
}

const BookSearchBarContainer: FC<Props> = ({ onChange }) => {
  const debouncedOnSearch = debounce(async (searchTerms: string) => {
    const { data } = await searchBook(searchTerms);
    onChange(data, searchTerms);
  }, 200);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedOnSearch(event.target.value);
  };

  return <BookSearchBarView onSearch={onSearch} />;
};

export default BookSearchBarContainer;
