import React, { useState, useEffect } from 'react';
import useFetch, { CachePolicies } from 'use-http';
import { useParams, useHistory } from 'react-router-dom';

import { Volume } from 'src/common/interfaces/volume/volume.interface';
import { Button } from '@material-ui/core';
import withoutAuth from 'src/common/helpers/without-auth';
import Book from 'src/common/interfaces/resources/book.interface';
import Collection from 'src/common/interfaces/collection.interface';
import BookDto from 'src/common/interfaces/resources/book.dto.interface';

const BookPageView = () => {
  const { id: externalId } = useParams();
  const { goBack } = useHistory();
  const [bookId, setBookId] = useState<string | null>(null);
  const { loading, error, data = null } = useFetch<Volume>(
    `https://www.googleapis.com/books/v1/volumes/${externalId}`,
    withoutAuth,
    [],
  );
  const { get, post, del, loading: ownedBookLoading, error: ownedBookError } = useFetch(
    `/v1/books`,
    { cachePolicy: CachePolicies.NO_CACHE },
    [],
  );

  useEffect(() => {
    async function loadIsOwnedBook() {
      const initialIsOwnedBook: Collection<Book> = await get(encodeURI(`?s={"externalId": "${externalId}"}`));
      if (initialIsOwnedBook.count === 1) {
        setBookId(initialIsOwnedBook.data[0].id);
      } else {
        setBookId(null);
      }
    }
    loadIsOwnedBook();
  }, [externalId, get]);

  async function addBookToShelf() {
    if (data && externalId) {
      const { authors, title, imageLinks } = data.volumeInfo;
      const { thumbnail } = imageLinks;
      const bookDto: BookDto = {
        externalId,
        authors,
        title,
        thumbnail,
      };
      const book: Book = await post('', bookDto);
      setBookId(book.id);
    }
  }

  async function removeBookFromShelf() {
    await del(`/${bookId}`);
    setBookId(null);
  }

  if (!data) {
    return (
      <>
        {(error || ownedBookError) && 'Error!'}
        {(loading || ownedBookLoading) && 'Loading...'}
      </>
    );
  }

  const { title, description, imageLinks, subtitle } = data.volumeInfo;
  const thumbnail = imageLinks?.thumbnail;

  return (
    <div>
      <div>
        <Button type="button" onClick={goBack}>
          Previous
        </Button>
      </div>
      <img src={thumbnail} alt={title} />
      <h1>
        {title}{' '}
        {!bookId ? (
          <Button type="button" onClick={addBookToShelf} disabled={ownedBookLoading}>
            Add to my shelf
          </Button>
        ) : (
          <Button type="button" onClick={removeBookFromShelf} disabled={ownedBookLoading}>
            Remove from my shelf
          </Button>
        )}
      </h1>
      <p>{subtitle}</p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default BookPageView;
