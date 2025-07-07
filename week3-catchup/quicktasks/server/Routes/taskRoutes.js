const express = require('express');
const { getTask, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
