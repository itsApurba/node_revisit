const express = require('express');

const todoRoute = express.Router();

const Todo = require('../models/todo.model');

todoRoute.get('/', async (req, res) => {
  try {
    const todo = await Todo.find().lean().exec();
    return res.send(todo);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

todoRoute.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id).lean().exec();
    return res.send(todo);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

todoRoute.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.send('Todo created successfully');
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

todoRoute.patch('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.send(todo);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

todoRoute.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    return res.send('user deleted successfully');
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = todoRoute;
