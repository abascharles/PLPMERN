//CRUD helpers
const connectDB = require("./db");
const { object } = require("mongodb");

//Adding the books
async function addBook(book) {
  const books = await connectDB();
  const result = await books.insertOne(book);
  console.log("Book added:", result.insertID);
}

//Fetching the books
async function listBooks() {
  const books = await connectDB();
  const allBooks = await books.find().toArray();
  console.log("All Books", allBooks);
}

//Updating the books - focus on the ID

async function updateBook(id, updates) {
  const books = await connectDB();
  const result = await books.updateOne(
    { _id: new ObjectId(id) },
    { $set: updates }
  );
  console.log("Updated:", result.modifiedCount);
}

//delete the books
async function deleteBook(id) {
  const books = await connectDB();
  const result = await books.deleteOne({ _id: new ObjectId(id) });
  console.log("Deleted:", result.deleteCount);
}

// exporting
module.exports = { addBook, listBooks, updateBook, deleteBook };
