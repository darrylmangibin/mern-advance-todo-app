const express = require('express');
const router = express.Router();

// MODELS
const Todos = require('../../models/Todos');


// @ROUTE GET
// @desc Get all todos
// @access Public
router.get('/', (req, res) => {
  Todos.find().then((todos) => {
    res.json(todos)
  }).catch((err) => {
    console.log(err)
    res.status(400).json({
      success: false,
      message: 'Could not get the data'
    })
  })
})

module.exports = router;