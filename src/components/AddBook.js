import React from 'react';

export default function AddBook() {
  return (
    <div>
      <form>
        <span>Title: </span>
        <input type="text" name="title" value="" />
        <span>Author: </span>
        <input type="text" name="author" value="" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
