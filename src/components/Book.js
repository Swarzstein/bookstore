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
    <div className="book-card">
      <div>
        <div className="book-info">
          <h4 className="book-category">{book.category}</h4>
          <h2 className="book-title">{book.title}</h2>
          <h3 className="book-author">{book.author}</h3>
        </div>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <div className="btn-divider" />
          <button type="button" onClick={() => deleteBook(book.id)}>Remove</button>
          <div className="btn-divider" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="completed">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="percentage">
            <h3>45%</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter">
          <h4>CURRENT CHAPTER</h4>
          <h3>Chapter 17</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}
