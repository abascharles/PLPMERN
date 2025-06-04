//Connect to mongoDb

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  await client.connect();
  return client.db("bookstore").collection("books"); //creating db an the collection it takes.
}

//exporting using common js
module.exports = connectDB;
