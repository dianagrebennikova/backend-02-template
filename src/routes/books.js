const router = require("express").Router();
const {
  getBooks,
  getBook,
  createBook,
  updateBooks,
  deleteBooks,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.patch("/books/:book_id", updateBooks);
router.delete("/books/:book_id", deleteBooks);

module.exports = router
