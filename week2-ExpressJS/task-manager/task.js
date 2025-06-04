const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desription: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("task,taskSchema");
