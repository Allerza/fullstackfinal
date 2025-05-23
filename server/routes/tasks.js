const express = require('express');
const router = express.Router();

// Temporary in-memory tasks array (no database for now)
let tasks = [
  { id: 1, text: 'Sample Task 1', completed: false },
  { id: 2, text: 'Sample Task 2', completed: true },
];

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /api/tasks - Add a new task
router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  const newTask = { id: tasks.length + 1, text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
