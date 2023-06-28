const { bookService } = require("../services");

const findAllBooks = async (req, res) => {
  try {
    const books = await bookService.findAllBooks();
    res.status(200).json({ message: "Books found", books: books });
  } catch (err) {
    res.status(500).json({ action: "findAllBooks", error: err });
  }
};

const findOneBook = async (req, res) => {
  try {
    const book = await bookService.findOneBook(req.params.id);
    res.status(200).json({ message: "Book found", book: book });
  } catch (err) {
    res.status(500).json({ action: "findOneBook", error: err });
  }
};

const createBook = async (req, res) => {
  try {
    const bookCreated = await bookService.createBook(req.body);
    res
      .status(201)
      .json({ message: "Book saved successfully", book: bookCreated });
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err });
  }
};

const updateBook = async (req, res) => {
  try {
    await bookService.updateBook(req.params.id, req.body);
    res.status(200).json({ message: "Book updated successfully" });
  } catch (err) {
    res.status(500).json({ action: "updateBook", error: err });
  }
};

const deleteBook = async (req, res) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.status(200).json({ message: "Book removed successfully" });
  } catch (err) {
    res.status(500).json({ action: "deleteBook", error: err });
  }
};

module.exports = {
  findAllBooks,
  findOneBook,
  createBook,
  updateBook,
  deleteBook,
};
