//Import express
const express = require("express");
const app = express(); //Initializing the app
const port = 3000;

//

app.get("/", (req, res) => {
  res.send("Hello World"); //Sends a response to the client - outgoing resposnse  to the client
});

//Middlewares
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
});

//Routing
app.get("/about", (req, res) => {
  res.send("About page");
});

app.post("/contact", (req, res) => {
  res.send("Contact page");
});

//Route Parameter
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

//req.params - object that holds all the route parameters

//Query Parameter
app.get("/search", (req, res) => {
  res.send(`Serch Query: ${req.query.q}`); //respond with the qeury value
});

//qewry looks like this
//search?q=value

//Start the server on port 3000
app.listen(port, () => {
  console.log("Server is running of http://localhost:3000");
});
