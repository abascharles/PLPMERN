//Imports
const express = require("express");
const mongoose = require("mongoose");

//
const app = express();
app.use(express.json());

const MongoUri = "mongodb://localhost:27017/taskdb";
const PORT = 3000;

mongoose
  .connect(MongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.error("MongoDb Connection error", err));
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
