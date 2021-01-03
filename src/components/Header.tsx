import React from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  makeStyles,
  Button,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default () => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  const logout = () => {
    window.confirm('Are you sure you want to logout');
  };

  const login = () => {
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
        >
          Big Brain
        </Typography>
        <div>
          {pathname === '/dashboard' &&
            <Button variant="contained" onClick={login}>Login</Button>
          }
          {'\u00A0'}
          <Button color="inherit" onClick={logout}>Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};