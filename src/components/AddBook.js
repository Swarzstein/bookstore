import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const [newTitle, setNewtitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [category, setCategory] = useState('Documentary');
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    const title = document.querySelector('#formTitle').value;
    const author = document.querySelector('#formAuthor').value;
    const id = books.length < 1 ? 0 : parseInt(books[books.length - 1].item_id, 10) + 1;
    dispatch(addBook({
      item_id: id.toString(), title, author, category,
    }));
    setNewtitle('');
    setNewAuthor('');
  };
  return (
    <section id="add-book">
      <h2>ADD NEW BOOK</h2>
      <form action="" onSubmit={addNewBook}>
        <input className="form-input" id="formTitle" type="text" name="title" value={newTitle} onChange={(e) => setNewtitle(e.target.value)} placeholder="Book title" required />
        <input className="form-input" id="formAuthor" type="text" name="author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} placeholder="Author" required />
        <select className="form-input" onChange={(e) => setCategory(e.target.value)}>
          <option value="Documentary">Documentary</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="WSci-Fi">Sci-Fi</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
}
