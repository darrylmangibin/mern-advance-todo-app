import React from 'react';
import classes from './AddTodos.module.css';

class AddTodos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={`form-group ${classes.AddTodos}`}>
          <div className={classes.formContainer}>
            <input type="text" className="form-control" placeholder="Add todos" />
            <button className="btn btn-primary">
              Add todo
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddTodos;