const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK: return {};
    case REMOVE_BOOK: return {};
    default: return state;
  }
}

export function addBook() {
  return { type: ADD_BOOK };
}

export function removeBook() {
  return { type: REMOVE_BOOK };
}
