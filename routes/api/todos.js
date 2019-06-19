const express = require('express');
const router = express.Router();

const Todos = require('../../models/Todos');

// @ROUTE GET
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
  Todos.find().then((todos) => {
    res.status(200).json(todos)
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ success: false })
  })
})

// @ROUTE POST
// @desc Create an item
// @access Public
router.post('/', (req, res) => {
  const { title } = req.body
  const newTodo = new Todos({
    title
  });
  newTodo.save().then((todo) => {
    res.status(200).json(todo)
  }).catch((err) => {
    res.status(400).json({ success: false })
  })
})

// @ROUTE DELETE
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
  const { id } = req.params
  Todos.findById(id).then((todo) => {
    if(!todo) res.status(400).json({ success: false });
    todo.remove().then((todo) => {
      res.status(200).json({ success: true, todo })
    }).catch((err) => {
      res.status(400).json({ success: false });
    })
  }).catch((err) => {
    res.status(400).json({ success: false });
  })
})

// @ROUTE PUT
// @desc Edit an item
// @access Public
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  Todos.findById(id).then((todo) => {
    if(!todo) return res.status(400).json({ success: false })
    todo.completed = completed;
    todo.save().then((todo) => {
      res.status(200).json({ success: true, todo })
    }).catch((err) => {
      res.status(400).json({ success: false })
    })
  }).catch((err) => {
    res.status(400).json({ success: fasle })
  })
})

module.exports = router;