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
  const { name } =req.body;
  const newItem = new Todo({
    name
  });
  newItem.save().then((todo) => {
    res.status(200).json({ success: true, todo })
  }).catch((err) => {
    res.status(400).json({ success: false, msg: 'Unable to save the data' })
  })
})

module.exports = router;