const { json } = require('express');
const task = require('../Models/Task');

//Get all tasks

const getTask = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

//Create a Task
const createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

//Update task

const updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(update);
};

//Delete a Task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: 'Task deleted' });
};

module.exports = { getTask, createTask, updateTask, deleteTask };
