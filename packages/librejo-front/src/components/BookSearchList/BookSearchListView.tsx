import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { VolumesResponse } from 'src/common/interfaces/volume/volume.interface';
import BookCard from '../BookCard';

interface Props {
  books?: VolumesResponse;
  page: number;
  onPageChange(event: React.ChangeEvent<unknown>, value: number): void;
}

const MAX_RESULTS = 10;

const BookSearchListView: FC<Props> = ({ books, page, onPageChange }) => {
  const getCount = () => {
    if (!books) return 0;
    const countMaxResults = Math.floor(books.totalItems / MAX_RESULTS);
    const countPage = page + 10;
    return countMaxResults > countPage ? countPage : countMaxResults;
  };

  return books ? (
    <div>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {books.items.map(book => {
          const { title, description, imageLinks, authors } = book.volumeInfo;
          const thumbnail = imageLinks?.thumbnail;

          return (
            <Box key={book.id} m={1} width={300}>
              <BookCard title={title} description={description} thumbnail={thumbnail} authors={authors} />
            </Box>
          );
        })}
      </Box>
      <Pagination page={page} count={getCount()} onChange={onPageChange} />
    </div>
  ) : (
    <div>No data</div>
  );
};

export default BookSearchListView;
