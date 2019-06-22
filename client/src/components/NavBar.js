import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flex: 1
  },
  color: {
    backgroundImage: 'linear-gradient(to right, rgba(46, 2, 117, 1) , rgba(78, 2, 201, 1))'
  },
  block: {
    display: 'block',
    padding: '10px 0'
  }
})

const NavBar = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar className={classes.block}>
          <Typography variant="h6" color="inherit" align="center">
            {title}
          </Typography>
          <Typography variant="subtitle2" align="center">
            What do you need to do?
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar