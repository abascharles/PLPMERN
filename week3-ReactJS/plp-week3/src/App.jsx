import { useState } from "react";
import Task from "./conponents/Task";

export default function App() {
  conast[(tasks, setTasks)] = useState([
    { id: 1, title: "Write Lesson Plan", completed: false },
    { id: 2, title: "review Mongo db Quiz", completed: true },
  ]);

  const toggleTasky = (id) => {
    setTasks((curr) =>
      curr.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl  font-bold mb-4">Task Dashboard</h1>
      {}
    </div>
  );
}

//11:50
