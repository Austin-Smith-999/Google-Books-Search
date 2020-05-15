// get request, delete, etc, like burger assingment
// database.burger.find(), db calls happen here
const db = require("../models");

module.exports = {
    findAll:function (req,res) {
        db.Book
        .find(req.query)
        .sort({
            date:-1
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create:function (req,res) {
        console.log("I hit the create function");
        let book = req.body;
        book.title = req.body.title;
        book.authors = req.body.author;
        book.description = req.body.description;
        book.img = req.body.img;
        book.link = req.body.link;
        db.Book
        .create(book)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}