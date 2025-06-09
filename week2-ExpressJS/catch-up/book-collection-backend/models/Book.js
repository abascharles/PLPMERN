const mongoose = require("mongoose");

const bookSchema = new mongoose.Schecma({
  title: { type: String, required: true },
  aithor: String,
  publishedYear: Number,
  genre: String,
});

module.exports = mongoose.model("Book", bookSchema);
