import React from 'react';
import classes from './AddTodos.module.css';
import { addTodo } from '../../actions';
import { connect } from 'react-redux';

class AddTodos extends React.Component {

  state = {
    title: ''
  }

  handleOnChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state)
    this.setState({ title: '' })
  }

  render() {
    return (
      <div className="container">
        <div className={`form-group ${classes.AddTodos}`}>
          <div className={classes.formContainer}>
            <input value={this.state.title} onChange={this.handleOnChange} type="text" className="form-control" placeholder="Add todos" />
            <button className="btn btn-primary" onClick={this.handleAddTodo} >
              Add todo
          </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {
  addTodo
})(AddTodos);