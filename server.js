const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/reminders', require('./routes/reminders'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/notes', require('./routes/notes'));

app.listen(5000, () => console.log('Server running on port 5000'));