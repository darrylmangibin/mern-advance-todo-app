const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: 1
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Todos = mongoose.model('todo', TodosSchema);

module.exports = Todos;