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
});

const NavButton = styled(Button)({
  fontWeight: 'bold',
});

export default () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const color = (curr: string) => pathname === curr ? "secondary" : "inherit";

  return (
    <AppBar position="static">
      <Toolbar className={classes.nav}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          style={{ fontWeight: 'bold'}}
        >
          Kaiqi Liang
        </Typography>
        <nav>
          <NavButton color={color("/resume")}>
            <Link to='/resume'>RESUME</Link>
          </NavButton>
          <NavButton color={color("/projects")}>
            <Link to='/projects'>PROJECTS</Link>
          </NavButton>
          <NavButton color={color("/podcasts")}>
            <Link to='/podcasts'>PODCASTS</Link>
          </NavButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};