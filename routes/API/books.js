//  use booksController, use express
// handle API routes according to whats set up in controllers
const router = require("express").Router();
const booksController = require("../../controllers/BooksController");

router.route("/")
.get(booksController.findAll)
.post(booksController.create)

module.exports = router;