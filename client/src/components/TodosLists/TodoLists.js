import React from 'react';
import classes from './TodoLists.module.css';

import Lists from './Lists/Lists';

class TodoLists extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={`${classes.TodosLists}`}>
          <h2>You have 0 todos left</h2>
          <div>
            <p className="lead">There are no to-dos to show</p>
          </div>
          <Lists />
        </div>
      </div>
    )
  }
}

export default TodoLists;