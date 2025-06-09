const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const mongoUri = "mongodb://localhost/27017/bookdb";
const port = 4000;

//middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use("/books", bookRoutes); //Hey Express app, whenever someone makes a request to any URL that starts with '/books', hand over the request to the `bookRoutes` to handle it.

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Error:", err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
