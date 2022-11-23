const express = require('express');
const booksController = require('../controller/BooksController');

const router = express.Router();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

router.post('/books', booksController.create);

router.put('/books/:id', booksController.update);

router.delete('/books/:id', booksController.remove);

module.exports = router;