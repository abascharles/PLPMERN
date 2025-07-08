import { useState, useEffect } from 'react';
import TaskItem from './Taskitem';
import { getTask, createTask, updateTask, deleteTask } from '../services/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const LoadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  //creating a task/Adding a task

  const handleAdd = async () => {
    // `text.trim()` = "Remove any extra spaces from what the user typed"
    // `!text.trim()` = "Is there NO real text?"
    // `return` = "Stop everything and go home!"

    if (!text.trim()) return; //if text contain white spaces dont continue
    const res = await createTask({ text, completed: false });
    setTasks(prev => [...prev, res.data]);
    setText(''); //clears the input box after sucessfully adding the task
  };

  //Updating
  const handleToggle = async id => {
    const task = task.find(t => t._id === id);
    const res = await updateTask(id, { ...task, completed: !task.completed });
  };
};
