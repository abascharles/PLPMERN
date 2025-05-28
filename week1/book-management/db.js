const { mongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new mongoClient(url);

async function conectDB() {
  await client.connect();
  return client.db("bookstore").collection("books");
}
