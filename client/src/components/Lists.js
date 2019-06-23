import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { getTodos } from '../actions';

import Todos from './Todo';

const styles = {
  container: {
    padding: '30px 0'
  },
  root: {
    width: '100%',
    maxWidth: 360,
  },
  ListContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  subtitle: {
    margin: '15px 0'
  }
}

class Lists extends React.Component {

  componentDidMount(a, b) {
    const {getTodos} = this.props;
    getTodos();
  }

  renderTodos = () => {
    const { classes, todos } = this.props;
    if(todos.length <= 0) {
      return (
        <Typography variant="body1" align="center" className={classes.subtitle}>
          There are no to-dos to show
        </Typography>
      )
    }
    return (   
      <List className={classes.root}>
        {todos.map(todo =>
            <Todos 
              key={todo._id}
              todo={todo}
            />  
          ).filter((todo) => {
            const { title } = todo.props.todo;
            const { filter } = this.props;
            if(title.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
              return todo
            }
          }).filter((todo) => {
            console.log(todo)
            if(!this.props.hide) {
              return todo
            } else {
              return !todo.props.todo.completed
            }
          })
        }
      </List>
    )
  }

  render() {
    const { classes, todos } = this.props;
    const incomplete = todos.filter((todo) => !todo.completed)
    return (
      <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h5" align="center">
            You have {incomplete.length} todo{incomplete.length > 1 ? 's' : ''} left
          </Typography>
          <div className={classes.ListContainer}>
              {this.renderTodos()}
          </div>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      return dispatch(getTodos())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    completed: state.todos.completed,
    filter: state.filter.filter,
    hide: state.filter.hide
  }
}

const WrappedLists = withStyles(styles)(Lists)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLists);