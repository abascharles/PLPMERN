const mongoose = require("mongoose");

//Defining how our schema will look like
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
