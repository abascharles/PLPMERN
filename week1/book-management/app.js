const { addBook, listBooks, updateBook, deleteBook } = require("./book");

const command = process.argv[2];

if (command === "add") {
  const [title, author, year] = process.argv.slice(3);
  addBook({ title, author, year: parseInt(year) });
}
