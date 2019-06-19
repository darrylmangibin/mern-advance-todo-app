import React from 'react';
import classes from './FilterTodos.module.css';
import { connect } from 'react-redux';
import { filterTodos, hideTodos } from '../../actions';

class FilterTodos extends React.Component {

  state = {
    check: false
  }

  handleCheckTodo = () => {
    this.props.hideTodos(this.state.check)
    this.setState({ check: !this.state.check })

  }

  render() {
    const { filter } = this.props.filter;
    return (
      <div className={`form-group ${classes.FilterTodos}`}>
        <div className={classes.formContainer}>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="filter" placeholder="Filter Todos" 
            value={filter}
            onChange={(e) => this.props.filterTodos(e.target.value)}
          />
          <label style={{ display: 'flex', justifyContent: 'center', width: '100%', color: '#fff', alignItems: 'center' }}>
            <input type="checkbox"
              onChange={this.handleCheckTodo}
            />
            <span className="lead">Hide completed</span>
          </label>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.todos
  }
}

export default connect(mapStateToProps, {
  filterTodos,
  hideTodos
})(FilterTodos);