//import
const express = require("express");

//initialize app
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
