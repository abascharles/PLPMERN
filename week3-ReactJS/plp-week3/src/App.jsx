import { useState } from 'react';
import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Write Lesson Plan', complete: false },
    { id: 2, title: 'Review MongoDB Quiz', complete: true },
  ]);

  const toggleTask = id => {
    setTasks(curr => curr.map(t => (t.id === id ? { ...t, complete: !t.complete } : t)));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4"> Task dashboard</h1>
      {tasks.map(task => (
        <Task key={task.id} {...task} onToggle={toggleTask} />
      ))}
    </div>
  );
}
