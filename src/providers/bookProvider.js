const { Book, Library } = require("../models");

const findAllBooks = async () => {
  try {
    const books = await Book.findAll({
      where: { isDeleted: false },
      include: Library,
      attributes: {
        exclude: ["isDeleted", "createdAt", "updatedAt"],
      },
    });
    return books;
  } catch (err) {
    throw err;
  }
};

const findOneBook = async (id) => {
  try {
    const book = await Book.findOne({
      where: { id, isDeleted: false },
      include: Library,
      attributes: {
        exclude: ["isDeleted", "createdAt", "updatedAt"],
      },
    });
    return book;
  } catch (err) {
    throw err;
  }
};

const createBook = async (body) => {
  try {
    const bookCreated = await Book.create(body);
    return bookCreated;
  } catch (err) {
    throw err;
  }
};

const updateBook = async (book, body) => {
  try {
    await Book.update(body, { where: { id: book.id } });
    return true;
  } catch (err) {
    throw err;
  }
};

const deleteBook = async (book) => {
  try {
    await Book.update({ isDeleted: true }, { where: { id: book.id } });
    return true;
  } catch (err) {
    throw err;
  }
};

const findBookByIsbnAndLibrary = async (isbn, libraryId) => {
  try {
    const book = await Book.findOne({ where: { isbn, libraryId } });
    return book;
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
  findBookByIsbnAndLibrary,
};
