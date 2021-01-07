import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ISourceOptions } from "tsparticles";
import {
  makeStyles,
  styled,
  Switch,
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
  title: {
    fontWeight: 'bold',
  }
});

const NavButton = styled(Button)({
  fontWeight: 'bold',
});

export default ({
  darkTheme,
  setDarkTheme,
  setOptions,
}: {
  darkTheme: boolean,
  setDarkTheme: (darkTheme: boolean) => void,
  setOptions: any,
}) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const variant = (currPath: string) => pathname === currPath ? "outlined" : "text";
  const toggle = () => {
    setDarkTheme(!darkTheme);
    setOptions(({ background, ...options }: ISourceOptions) => {
      return {
        background: {
          color: {
            value: darkTheme ? "#282c34" : "#111"
          },
        },
        ...options,
      };
    });
  };

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
          <Switch
            checked={darkTheme}
            onChange={toggle}
            inputProps={{ 'aria-label': 'colour modes toggle' }}
          />
        </nav>
      </Toolbar>
    </AppBar>
  );
};