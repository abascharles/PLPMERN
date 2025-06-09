const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

//create
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Read all
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

//Read one

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send("Book not found");
  res.send(book);
});

module.exports = router;
