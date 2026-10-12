require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const Todo = require('./Models/Todo.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.send('Data Received');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data');
  }
});

app.get('/a', async (req, res) => {
  try {
    let todo = await Todo.find({});
    res.json({ todo });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

startServer();