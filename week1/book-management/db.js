//Connect to Mongo DB
const { mongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new mongoClient(url);

async function conectDB() {
  await client.connect();
  return client.db("bookstore").collection("books");
}

// exporting in common js
module.exports = connectDB;
