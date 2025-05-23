import React, { useState } from 'react';

export default function TaskForm({ onTaskAdded }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add task');
        return res.json();
      })
      .then((newTask) => {
        onTaskAdded(newTask);
        setText('');
        setError(null);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
