import React from 'react';
import useFetch from 'use-http';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';

import Collection from 'src/common/interfaces/collection.interface';
import Book from 'src/common/interfaces/resources/book.interface';
import BookCard from 'src/components/BookCard';

const ShelfPageView = () => {
  const { loading, error, data: books = null } = useFetch<Collection<Book>>(`/v1/books`, []);

  if (!books) {
    return (
      <>
        {error && 'Error!'}
        {loading && 'Loading...'}
      </>
    );
  }

  return !books.data?.length ? (
    <div>No books found in your shelf.</div>
  ) : (
    <div>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {books.data.map(book => {
          const { title, thumbnail, authors } = book;

          return (
            <Box key={book.id} m={1} width={180}>
              <BookCard externalId={book.externalId} title={title} thumbnail={thumbnail} authors={authors} />
            </Box>
          );
        })}
      </Box>
      {/* <Pagination page={page} count={getCount()} onChange={onPageChange} /> */}
    </div>
  );
};

export default ShelfPageView;
