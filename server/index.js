const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.json()); // for parsing JSON bodies

// Use the tasks routes under /api/tasks
app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

