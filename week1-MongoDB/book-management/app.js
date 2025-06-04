const { addBook, listBooks, updateBook, deleteBook } = require("./book.js");

const command = process.argv[2]; //I need to find an explanation for this line;

if (command === "add") {
  const [title, author, year] = process.argv.slice(3);
  addBook({ title, author, year: parseInt(year) });
} else if (command === "list") {
  listBooks();
} else if (command === "update") {
  const [id, field, value] = process.argv.slice(3);
  updateBook(id, { [field]: isNaN(value) ? value : parseInt(value) });
} else if (command === "delete") {
  const [id] = process.argv.slice(3);
  deleteBook(id);
}
