import React from 'react';
import classes from './FilterTodos.module.css'

class FilterTodos extends React.Component {
  render() {
    return (
      <div className={`form-group ${classes.AddTodos}`}>
        <div className={classes.formContainer}>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="filter" placeholder="Filter Todos" />
          <label style={{ display: 'flex', justifyContent: 'center', width: '100%', color: '#fff', alignItems: 'center' }}>
            <input type="checkbox" />
            <span className="lead">Hide completed</span>
          </label>
        </div>
      </div>
    )
  }
}

export default FilterTodos;