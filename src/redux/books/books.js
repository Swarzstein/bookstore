import * as api from '../../modules/bookstoreAPI';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.newBook];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    case GET_BOOKS: return action.books;
    default: return state;
  }
}

export const addBook = (newBook) => async (dispatch) => {
  api.addBook(newBook);
  dispatch({
    type: ADD_BOOK,
    newBook,
  });
};

export const removeBook = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export const getBooks = () => async (dispatch) => {
  const books = await api.getBooks();
  dispatch({
    type: GET_BOOKS,
    books,
  });
};
