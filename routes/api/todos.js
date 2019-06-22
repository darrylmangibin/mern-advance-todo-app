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

// @ROUTE POST
// @desc Create a todos
// @access Public
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTodo = new Todos({
    title
  });
  newTodo.save().then((todo) => {
    res.status(200).json({
      success: true,
      data: todo
    })
  }).catch((err) => {
    res.status(400).json({
      success: false
    })
  })
});

// @ROUTE DELETE
// @desc Delete a todos
// @access Public
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Todos.findById({ _id: id }).then((todo) => {
    if(!todo) return res.status(400).json({
      success: false,
      message: 'No data found'
    })
    todo.remove().then((todo) => {
      res.status(200).json({
        success: true,
        todo
      });
    });
  }).catch((err) => {
    console.log(err)
    res.status(400).json({
      success: false,
      message: 'No data found'
    });
  });
});

// @ROUTE PUT
// @desc Edit a todos
// @access Public
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  Todos.findById({ _id: id }).then((todo) => {
    if(!todo) {
      res.status(404).json({
        success: false,
        message: 'No data found'
      });
    }
    todo.completed = completed;
    todo.save().then((todo) => {
      res.status(200).json({
        success: true,
        todo
      })
    }).catch((err) => {
      res.status(400).json({
        success: false,
        message: 'No data found'
      })
    })
  })
})

module.exports = router;