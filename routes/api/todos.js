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

module.exports = router;