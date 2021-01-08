import React from 'react';
import { ISourceOptions } from 'react-tsparticles';
import { Link, useLocation } from "react-router-dom";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {
  makeStyles,
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
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ({
  darkTheme,
  setDarkTheme,
  setOptions,
}: {
  darkTheme: boolean,
  setDarkTheme: (darkTheme: boolean) => void,
  setOptions: Function //(callback: (options: ISourceOptions) => void) => void,
}) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const variant = (currPath: string) => pathname === currPath ? "outlined" : "text";
  const toggle = () => {
    setDarkTheme(!darkTheme);
    setOptions(({ background, particles, ...options }: ISourceOptions) => {
      var { color, ...props } = particles as { color: { value: string } }; // why doesn't particles have color
      return {
        background: {
          color: {
            value: darkTheme ? "#fff" : "#000",
          },
        },
        particles: {
          color: {
            value: darkTheme ? "#000" : "#fff",
          },
          ...props,
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
          className={classes.bold}
        >
          Kaiqi Liang
        </Typography>
        <nav className={classes.nav}>
          <Button className={classes.bold} variant={variant("/resume")}>
            <Link to='/resume'>RESUME</Link>
          </Button>
          <Button className={classes.bold} variant={variant("/projects")}>
            <Link to='/projects'>PROJECTS</Link>
          </Button>
          <Button className={classes.bold} variant={variant("/podcasts")}>
            <Link to='/podcasts'>PODCASTS</Link>
          </Button>
          <Switch
            checked={darkTheme}
            onChange={toggle}
            inputProps={{ 'aria-label': 'colour modes toggle' }}
          />
          {darkTheme ? <NightsStayIcon /> : <WbSunnyIcon />}
        </nav>
      </Toolbar>
    </AppBar>
  );
};