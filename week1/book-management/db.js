//Connect to Mongo DB
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function conectDB() {
  await client.connect();
  return client.db("bookstore").collection("books");
}

// exporting in common js
module.exports = connectDB;
