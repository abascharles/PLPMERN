//Imports
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes");

//Create express server and middle ware
const app = express(); //creating an express server
app.use(express.json()); //middleware that allows jsons to be created

//Constants
const mongoUri = "mongodb://localhost:27017/taskdb"; //connect mongodb
const port = 3000;

//MongoDb connection
mongoose
  .connect(mongoUri, {
    //pasing instructions
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error("Could not connect to mongodb", err));

//use task routes
app.use("/", taskRoutes);

//Fire up the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
