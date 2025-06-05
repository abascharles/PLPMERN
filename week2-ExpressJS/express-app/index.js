//Import express
const express = require("express");
const app = express(); //Initializing the app
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const port = 3000;
//Middlewares
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
});

app.use(express.json()); //middleware to pass request(json) body - checks the body of the request (make sure it has something)

app.get("/", (req, res) => {
  res.send("Hello World"); //Sends a response to the client - outgoing resposnse  to the client
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
  res.send(`Search Query: ${req.query.q}`); //respond with the query value
});
//req.query = query string parameter
//q is the value
//query looks like this
//search?q=value

//Start the server on port 3000
app.listen(port, () => {
  console.log("Server is running of http://localhost:3000");
});

//REST API
//CRUD - POST, GET, PUT, DELETE

//memory
let users = [
  { id: 1, name: "Spongebob" },
  { id: 2, name: "Squidward" },
];

//Create
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name }; //forming a new id by adding one to the current lenght od users array
  users.push(newUser);
  res.status(201).json(newUser);
});

//Read
app.get("/users", (req, res) => {
  res.json(users);
});

//Read one
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.json(user);
});

//Update
app.put("/users/:id", (req, res) => {
  //const user = users.find((u) => u.id == req.params.id);
  // Better comparison (convert string to number)
  const user = users.find((u) => u.id === parseInt(req.params.id));
  user.name = req.body.name;
  res.json(user);
});

//Delete
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.status(204).send();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
