import React from 'react';
import useFetch from 'use-http';

import Collection from 'src/common/interfaces/collection.interface';
import Book from 'src/common/interfaces/resources/book.interface';

const ShelfPageView = () => {
  const { loading, error, data = null } = useFetch<Collection<Book>>(`/v1/books`, []);

  if (!data) {
    return (
      <>
        {error && 'Error!'}
        {loading && 'Loading...'}
      </>
    );
  }

  return !data.data?.length ? <div>No books found in your shelf.</div> : <div>books found: {data.count}</div>;
};

export default ShelfPageView;
