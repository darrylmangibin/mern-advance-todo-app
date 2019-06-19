import React from 'react';
import classes from './TodoLists.module.css';
import { getTodos } from '../../actions/';
import { connect } from 'react-redux'

import Lists from './Lists/Lists';

class TodoLists extends React.Component {

  componentDidMount() {
    this.props.getTodos()
  }

  renderTodos = () => {
    const { todos } = this.props.todos;
    const { filter } = this.props.todos;
    const { completed } = this.props.todos;
    if(todos.length <= 0) {
      return (
        <div>
          <p className="lead">There are no to-dos to show</p>
        </div>
      )
    }
    return todos.map((todo) => {
      return (
        <Lists 
          key={todo._id}
          todo={todo}
        />
      )
    }).filter((todo) => {
      if(todo.props.todo.title.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
        return todo
      }
    }).filter((todo) => {
      if(completed === false) {
        return todo.props.todo
      } else {
        return !todo.props.todo.completed
      }
    })
  }

  render() {
    const { todos } = this.props.todos;
    const incomplete = todos.filter((todo) => !todo.completed)
    return (
      <div className="container">
        <div className={`${classes.TodosLists}`}>
          <h2>You have {incomplete.length} todos left</h2>
            {this.renderTodos()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.todos,
    completed: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);