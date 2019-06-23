import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux';
import { deleteTodo, checkTodo } from '../actions';

class Todo extends React.Component {

  handleDeleteTodo = (id) => {
    const { deleteTodo } = this.props;
    deleteTodo(id)
  }

  handleCheckTodo = () => {
    const newTodo = this.props.todo;
    newTodo.completed = !newTodo.completed
    this.props.checkTodo(newTodo._id, newTodo)
  }

  render() {
    const { title, _id, completed } = this.props.todo;
    return (
      <ListItem dense button
        onClick={this.handleCheckTodo}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            disableRipple
            checked={completed}
          />
        </ListItemIcon>
        <ListItemText primary={title} />
        <ListItemSecondaryAction
          onClick={() => this.handleDeleteTodo(_id)}
        >
          <IconButton edge="end" aria-label="Delete">
            <DeleteForeverIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  checkTodo: (id, todo) => dispatch(checkTodo(id ,todo))
})

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    completed: state.todos.completed,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);