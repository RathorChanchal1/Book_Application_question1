const Book = require('../models/Book');

// Retrieve all books
async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Add a new book
async function addBook(req, res) {
  const { title, author, publicationYear } = req.body;
  try {
    const newBook = new Book({ title, author, publicationYear });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update book details
async function updateBook(req, res) {
  const bookId = req.params.id;
  const { title, author, publicationYear } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, publicationYear },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
};
