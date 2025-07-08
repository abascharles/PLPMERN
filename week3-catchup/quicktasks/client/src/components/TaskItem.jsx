const TaskItem = ({ task, ontoggle, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-white p-2 mb-2 shadow">
      <span className={`cursor-pointer ${(task, completed ? 'line-trough text-gray' : '')}`}>{task.text}</span>
    </li>
  );
};
