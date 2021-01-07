import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  makeStyles,
  Button,
  Typography,
  AppBar,
  Toolbar,
  styled,
} from '@material-ui/core';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  }
});

const NavButton = styled(Button)({
  fontWeight: 'bold',
});

export default () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const variant = (currPath: string) => pathname === currPath ? "outlined" : "text";

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
        >
          Kaiqi Liang
        </Typography>
        <nav>
          <NavButton color="inherit" variant={variant("/resume")}>
            <Link to='/resume'>RESUME</Link>
          </NavButton>
          <NavButton color="inherit" variant={variant("/projects")}>
            <Link to='/projects'>PROJECTS</Link>
          </NavButton>
          <NavButton color="inherit" variant={variant("/podcasts")}>
            <Link to='/podcasts'>PODCASTS</Link>
          </NavButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};