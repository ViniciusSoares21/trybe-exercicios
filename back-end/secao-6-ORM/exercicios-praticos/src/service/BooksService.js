const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();
  
  return books;
};

const getById = async (id) => {
  const bookById = await book.findByPk(id);

  return bookById;
};

const create = async (title, author, pageQuantity) => {
  const newBook = await book.create({ title, author, pageQuantity });

  return newBook;
};

const update = async (id, title, author, pageQuantity) => {
  const [updateBook] = await book.update({ title, author, pageQuantity },
    { where: { id } });
    console.log(updateBook);

  return updateBook;
};

const remove = async (id) => {
  const bookDelet = await book.destroy({ where: { id } });

  return bookDelet;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}