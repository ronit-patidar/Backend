const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true, default: "Hey" },
    desc: String,
    isDone: Boolean,
    days: Number
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;