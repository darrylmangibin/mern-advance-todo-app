const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Todos = mongoose.model('todo', TodosSchema);