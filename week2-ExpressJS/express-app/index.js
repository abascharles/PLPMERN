//import
const express = require("express");

//initialize app
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
