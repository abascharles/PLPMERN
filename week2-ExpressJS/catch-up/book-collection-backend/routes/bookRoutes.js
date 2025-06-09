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
    res.status(500).send(err);
  }
});

module.exports = router;
