import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h5" align="center">
            You have 0 todos left
          </Typography>
          <div className={classes.ListContainer}>
            <Typography variant="body1" align="center" className={classes.subtitle}>
              There are no to-dos to show
            </Typography>
            <List className={classes.root}>
              <ListItem dense button>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary="Todo 1" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete">
                  <DeleteForeverIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
      </Container>
    )
  }
}

export default withStyles(styles)(Lists);