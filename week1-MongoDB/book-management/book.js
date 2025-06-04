//CRUD helpers
const connectDB = require("./db"); //import connection from db.js (this is s function)
const { objectId } = require("mongodb"); //fetch the objectID from mongo db -

//Adding the books
async function addBook(book) {
  const books = await connectDB();
  const result = await books.insertOne(book); //here 'result' variavble is used to store results from insertOne() query.
  console.log("Book added:", result.insertedId);
}

//Fetching the books
async function listBooks() {
  const books = await connectDB();
  const allBooks = await books.find().toArray(); //here 'allBooks' variable is used to store  results from the find() query
  console.log("Allbooks:", allBooks);
}
//Updating the books - focus on the ID

async function updateBook(id, updates) {
  //this function takes the id of the object you want to update as well as the updates
  const books = await connectDB();
  const result = await books.updateOne(
    { _id: new ObjectId(id) }, //filtering by id --to verify
    { $set: updates } //field we want to update --to verify
  );
  console.log("Updated", result.modifiedCount);
}
async function deleteBook(id) {
  //delete by id
  const books = await connectDB();
  const result = await books.deleteOne({
    _id: new objectId(id),
  });
  console.log("Deleted", result.deletedCount);
}
//delete the books

// exporting
module.exports = { addBook, listBooks, updateBook, deleteBook };
