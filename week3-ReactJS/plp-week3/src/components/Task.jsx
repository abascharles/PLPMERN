//props in react
//Think of props as delivery package to your component in this case Task
// ## Think of it Like This: 📬

// - The **parent component** is like a person sending a package
// - The **props** are like the contents of the package
// - Your **Task component** is like the person receiving the package and using what's inside
//So when the parent component creates a `<Task>`, it's basically saying: "Hey Task component, here's your delivery box with an id, title, completion status, and a function to use!"The `{ id, title, complete, onToggle }` part is called **destructuring props** - it's like opening the delivery box and taking out exactly what you need.\

// The `{ id, title, complete, onToggle }` part is called **destructuring props** - it's like opening the delivery box and taking out exactly what you need.

export default function Task({ id, title, complete, onToggle }) {
  return (
    <div className="flex-items-center justify-between p-4 bg-white rounded shadow mb-2">
      {/* conditional styling */}
      <span className={complete ? 'line-through text-gray-500' : ''}>{title}</span>

      <button className={`px-3 py-1 rounded ${complete ? 'bg-green-200' : 'bg-blue-200'}`} onClick={() => onToggle}>
        {complete ? 'Undo' : 'Done'}
      </button>
    </div>
  );
}
