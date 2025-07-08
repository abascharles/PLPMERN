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

  //Updating (toggle complete)
  const handleToggle = async id => {
    const task = task.find(t => t._id === id);
    const res = await updateTask(id, { ...task, completed: !task.completed });
    setTasks(prev => prev.map(t => (t._id === id ? res.data : t)));
  };

  //deleting
  const handleDelete = async id => {
    await deleteTask(id);
    setTasks(prev => prev.filter(t => t._id !== id));
  };

  return (
    <div className="main-h-screen bg-gray-100 p-10 max-w-xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6 text-center">Quicktasks</h1>
      <div className="flex gap-2 mb-4">
        <input value={text} onChange={e => setText(e.target.value)} className="border p-2 rounded w-full" placeholder="Enter new task..." />
        <button onClick={handleAdd} className="gb-blue-600 text-white px-4 rounded">
          Add
        </button>
      </div>

      <ul>
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} ontoggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
