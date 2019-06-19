import React from 'react';
import classes from './Lists.module.css';
import { removeTodo, checkTodo } from '../../../actions';
import { connect } from 'react-redux';

const Lists = ({ todo, removeTodo, checkTodo }) => {

  const handleCheckTodo = () => {
    todo.completed = !todo.completed;
    checkTodo(todo._id, todo)
  }

  return (
    <label className={`${classes.Lists}`}>
      <div style={{ flex: 1, padding: '10px' }}>
        <input type="checkbox" 
          checked={todo.completed}
          onChange={handleCheckTodo}
        />
        <span style={{ fontSize: '21px' }}>{ todo.title }</span>
      </div>
      <button onClick={() => removeTodo(todo._id)}>
        remove
      </button>
    </label>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {
  removeTodo,
  checkTodo
})(Lists);