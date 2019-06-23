import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addTodo } from '../actions'


const styles = {
  textField: {
    marginRight: '20px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

class FormLists extends React.Component {

  state = {
    title: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      title: ''
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <form className={classes.container}
          onSubmit={this.handleOnSubmit}
        >
          <TextField
            name="title"
            label="Add Todo"
            placeholder="Todo"
            className={classes.textField}
            margin="normal"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <Button type="submit" variant="contained" color="primary"
            
          >
            Add Todo
          </Button>
        </form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

const WrappedFormLists = withStyles(styles)(FormLists)

export default connect(null, mapDispatchToProps)(WrappedFormLists);