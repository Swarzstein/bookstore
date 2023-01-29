import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

export default function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div id="books-container">
      <section id="books">
        {books.map(
          (book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ),
        )}
      </section>
      <div className="section-divider" />
      <AddBook />
    </div>
  );
}
