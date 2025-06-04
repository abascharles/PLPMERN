//Import express
const express = require("express");
const app = express(); //Initializing the app
const port = 3000;

//

app.get("/", (req, res) => {
  res.send("Hello World"); //Sends a response to the client - outgoing resposnse  to the client
});

//Start the server on port 3000

app.listen(port, () => {
  console.log("Server is running of http://localhost:3000");
});
