import { useState, useEffect } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

export default function App() {
  // Initialize state, loading from localStorage if data exists
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: 'Write Lesson Plan', completed: false },
          { id: 2, title: 'Review MongoDb Quiz', completed: true },
        ];
  });

  // Persist tasks whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Toggle task completed status immutably
  const toggleTask = id => {
    setTasks(curr => curr.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Add a new task at the beginning of the list
  const addTask = title => {
    setTasks(curr => [{ id: Date.now(), title, completed: false }, ...curr]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Task Dashboard</h1>

      <TaskForm onAdd={addTask} />

      {tasks.length ? (
        tasks.map(task => <Task key={task.id} {...task} onToggle={toggleTask} />)
      ) : (
        <p className="text-gray-500">No tasks yet! Add one above.</p>
      )}
    </div>
  );
}
