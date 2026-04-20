const Book = require('../models/book')

const getBooks = (request, response) => {
  return Book.find({}).then(
    (data) =>  {
        response.status(200);
        response.send(data);     
    }
  ).catch(e => response.status(500).send(e.message))
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(book_id).then(
    (book) =>  {
        response.status(200);
        response.send(book);     
    }
  )
};
const createBook = (request, response) => {
    return Book.create({...request.body }).then(
        (book) => { response.status(201).send(book)}
    )
};
const updateBooks = (request, response) => {
    const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, {...request.body }).then(
    (book) =>  {
        response.status(200);
        response.send(book);     
    })
};
const deleteBooks = (request, response) => {
    const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id).then(
    (book) =>  {
        response.status(200);
        response.send("Success");     
    })
};

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBooks,
    deleteBooks,
};
