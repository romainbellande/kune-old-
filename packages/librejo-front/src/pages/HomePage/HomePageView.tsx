import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import BookSearchBar from 'src/components/BookSearchBar';
import BookSearchList from 'src/components/BookSearchList';
import { VolumesResponse } from 'src/common/interfaces/volume/volume.interface';
import { searchBook } from 'src/common/services/books.service';

export default () => {
  const [books, setBooks] = useState<VolumesResponse>();
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerms, setSearchTerms] = useState('');

  const onChange = (books: VolumesResponse, searchTerms: string) => {
    setBooks(books);
    setSearchTerms(searchTerms);
  };

  const onPageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
    const newStartIndex = page * 10;
    setStartIndex(newStartIndex);
    const { data } = await searchBook(searchTerms, newStartIndex);
    setBooks(data);
  };

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <BookSearchBar onChange={onChange} />
      </Box>
      <BookSearchList books={books} page={startIndex / 10} onPageChange={onPageChange} />
    </div>
  );
};
