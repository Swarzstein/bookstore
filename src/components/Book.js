import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(props) {
  const book = props;

  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <button type="button" onClick={() => deleteBook(book.id)}>Remove</button>
    </div>
  );
}
