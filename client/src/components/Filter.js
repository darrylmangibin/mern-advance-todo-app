import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  render() {
    const { classes } = this.props
    return (
      <Container maxWidth="sm" className={classes.container}>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox />
          }
          label="Hide Completed"
        />
      </Container>
    )
  }
}

export default withStyles(styles)(Filter);