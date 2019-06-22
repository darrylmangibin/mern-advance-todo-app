import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <form className={classes.container}>
          <TextField
            label="Add Todo"
            placeholder="Todo"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="secondary">
            Add Todo
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(FormLists)