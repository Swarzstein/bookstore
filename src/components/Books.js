import React, { Component } from 'react'
import AddBook from './AddBook';
import Book from './Book';

export default class Books extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
    };
  }

  render() {
    console.log('rendering')
    return (
      <div>
        {this.state.books.map(book => <Book title={book.title} author={book.author} />)}
        <AddBook />
      </div>
    )
  }
}
