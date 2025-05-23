import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  // Fetch tasks on page load
  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Add new task
  const handleAddTask = async () => {
    if (!text.trim()) return;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newTask = await res.json();
    setTasks(prev => [...prev, newTask]);
    setText('');
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="New task"
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
