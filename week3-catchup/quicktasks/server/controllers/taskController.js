const { json } = require('express');
const Task = require('../Models/Task');

//Get all tasks

const getTask = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

//Create a Task
const createTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
};

//Update task

const updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

//Delete a Task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: 'Task deleted' });
};

module.exports = { getTask, createTask, updateTask, deleteTask };
