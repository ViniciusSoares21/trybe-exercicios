const express = require('express');

const router = express.Router();

const booksRouter = require('./bookRouter');

router.use(booksRouter);

module.exports = router;