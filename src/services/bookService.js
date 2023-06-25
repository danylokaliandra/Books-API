const { bookProvider } = require("../providers");

const findAllBooks = async () => {
  try {
    const books = await bookProvider.findAllBooks();
    if (!books) throw `No books found`;
    return books;
  } catch (err) {
    throw err;
  }
};

const findOneBook = async (id) => {
  try {
    const book = await bookProvider.findOneBook(id);
    if (!book) throw `Book with id ${id} does not exist`;
    return book;
  } catch (err) {
    throw err;
  }
};

const createBook = async (body) => {
  const book = await bookProvider.findBookByIsbnAndLibrary(
    body.isbn,
    body.LibraryId
  );
  if (book) throw "Repeating book";
  try {
    const bookCreated = await bookProvider.createBook(body);
    return bookCreated;
  } catch (err) {
    throw err;
  }
};

const updateBook = async (id, body) => {
  const book = await bookProvider.findOneBook(id);
  if (!book) throw `Book with id ${id} does not exist`;
  try {
    await bookProvider.updateBook(book, body);
    return true;
  } catch (err) {
    throw err;
  }
};

const deleteBook = async (id) => {
  const book = await bookProvider.findOneBook(id);
  if (!book) throw `Book with id ${id} does not exist`;
  try {
    await bookProvider.deleteBook(book);
    return true;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllBooks,
  findOneBook,
  createBook,
  updateBook,
  deleteBook,
};
