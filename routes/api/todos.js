const express = require('express');
const router = express.Router();

// MODEL
const Todo = require('../../models/Todos');

// @ROUTE GET
// @desc Get all todos
// @access Public
router.get('/', (req, res) => {
  Todo.find().then((todos) => {
    res.status(200).json(todos)
  }).catch((err) => {
    res.status(400).json({ success: false })
  })
})

// @ROUTE POST
// @desc Create a todos
// @access Public
router.post('/', (req, res) => {
  const { title } =req.body;
  const newItem = new Todo({
    title
  });
  newItem.save().then((todo) => {
    res.status(200).json({ success: true, todo })
  }).catch((err) => {
    res.status(400).json({ success: false, msg: 'Unable to save the data' })
  })
})

// @ROUTE DELETE
// @desc Create a todos
// @access Public
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Todo.findById(id).then((todo) => {
    todo.remove().then((todo) => {
      res.status(200).json({ success: true, todo })
    }).catch(() => {
      res.status(400).json({ success: false })
    })
  }).catch((err) => {
    res.status(400).json({ success: false })
  })
})

// @ROUTE PUT
// @desc Edit todos
// @access Public
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  Todo.findById(id).then((todo) => {
    todo.completed = completed
    todo.save().then((todo) => {
      res.status(200).json(todo)
    }).catch((err) => {
      res.status(400).json({ success: false })
    })
  }).catch(() => {
    res.status(400).json({ success: false })
  })
})

module.exports = router;