const express = require('express');

const router = express.Router();

// MODELS
const Todos = require('../../models/Todos');

// @ROUTE GET
// @desc Get all Todos
// @access PUBLIC
router.get('/', (req, res) => {
  Todos.find((err, todos) => {
    if(err) {
      return res.status(404).json({
        success: false
      });
    }
    return res.status(200).json(todos)
  });
});

// @ROUTE POST
// @desc Create a Todo
// @access PUBLIC
router.post('/', (req, res) => {
  const newTodo = new Todos({
    title: req.body.title
  });
  
  Todos.findOne({ title: req.body.title }, (err, doc) => {
    if(err) return res.status(404).json({
      success: false,
      message: 'Please add a todo'
    })
    if(doc) {
      return res.json({
        success: false,
        message: 'Todo already exist'
      })
    }
    newTodo.save((err, todo) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Could not Create a list'
        })
      };
      return res.status(200).json(todo)
    });
  })
});

// @ROUTE DELETE
// @desc Delete a Todo
// @access PUBLIC
router.delete('/:id', (req, res) => {
  Todos.findById({ _id: req.params.id }, (err, todo) => {
    if (!todo) return res.status(400).json({
      success: false,
      message: 'No data found'
    });

    if(err) return res.status(400).json({
      success: false,
      message: 'No data found'
    });
    todo.remove((err, doc) => {
      if (err) return res.status(400).json({
        success: false,
        message: 'No data found'
      });
      return res.status(200).json(doc)
    })
  })
})

// @ROUTE PUT
// @desc Edit a Todo
// @access PUBLIC
router.put('/:id', (req, res) => {
  Todos.findById(req.params.id, (err, todo) => {
    if(err) return res.status(400).json({
      success: false,
      message: 'Could not change the data'
    });
    todo.completed = req.body.completed
    todo.save((err, doc) => {
      if (err) return res.status(400).json({
        success: false,
        message: 'Could not change the data'
      });
      return res.status(200).json(todo)
    })
  })
})

module.exports = router;