import React, { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          id: 0,
          title: 'Hunger Games',
          author: 'Suzanne Collins',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
        <AddBook />
      </div>
    );
  }
}
