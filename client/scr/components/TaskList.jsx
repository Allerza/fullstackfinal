import React, { useEffect, useState } from 'react';

export default function TaskList({ tasks }) {
  if (!tasks.length) return <p>No tasks yet.</p>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text} {task.completed ? '✅' : ''}
        </li>
      ))}
    </ul>
  );
}
