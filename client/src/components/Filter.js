import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { filterTodos, hideTodo } from '../actions'

const styles = {
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 200,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class Filter extends React.Component {

  state = {
    hide: false
  }

  handleChange = (e) => {
    this.props.filterTodos(e.target.value)
  }

  handleHide = (e) => {
    this.setState({
      hide: e.target.checked
    })
    this.props.hideTodo(e.target.checked)
  }

  render() {
    console.log(this.props.hide)
    const { classes } = this.props
    return (
      <Container maxWidth="sm" className={classes.container}>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          value={this.props.filter}
          onChange={this.handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={this.state.hide}
              onChange={this.handleHide}
            />
          }
          label="Hide Completed"
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter.filter,
    hide: state.filter.hide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterTodos: (filterWord) => dispatch(filterTodos(filterWord)),
    hideTodo: (value) => dispatch(hideTodo(value))
  }
}

const WrappedFilter = withStyles(styles)(Filter);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedFilter)