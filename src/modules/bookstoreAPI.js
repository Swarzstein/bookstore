const key = '8Da0dHex4bUtMOJT8O6W';

export const getBooks = async () => {
  try {
    const books = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books`)
      .then((response) => response.json());
    const bookIds = Object.keys(books);
    const bookList = [];
    bookIds.forEach((key) => {
      const { 0: bookData } = books[key];
      bookList.push({
        item_id: key,
        ...bookData,
      });
    });
    console.log(bookList);
    return bookList;
  } catch (e) {
    return [];
  }
};

export async function addBook(book) {
  try {
    const request = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books`, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return request.status;
  } catch (error) {
    return error;
  }
}

export async function deleteBook(id) {
  const request = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return request.status;
}
