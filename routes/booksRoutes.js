const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  updateBook,
} = require('../controllers/booksController');

// Retrieve all books
router.get('/', getAllBooks);

// Add a new book
router.post('/', addBook);

// Update book details by ID
router.put('/:id', updateBook);

module.exports = router;
