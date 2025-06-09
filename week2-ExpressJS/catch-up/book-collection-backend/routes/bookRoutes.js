const express = require("express");
const router = express.router();
const Book = require("../models/Book");

//create
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save;
  } catch (error) {
    res.status(500).send();
  }
});
