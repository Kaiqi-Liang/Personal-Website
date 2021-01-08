import React from 'react';
import { ISourceOptions } from 'react-tsparticles';
import { Link, useLocation } from "react-router-dom";
import DarkMode from '@material-ui/icons/Brightness4';
import LightMode from '@material-ui/icons/Brightness7';
import Settings from '@material-ui/icons/Settings';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  makeStyles,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  List,
  ListItem,
  ListItemText,
  TextField,
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
  li: {
    padding: 0,
  },
  select: {
    marginLeft: 24,
    width: 200,
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
  const [dialog, setDialog] = React.useReducer((dialog) => !dialog, false);

  const variant = (currPath: string) => pathname === currPath ? "outlined" : "text";
  const toggle = () => {
    setDarkTheme(!darkTheme);
    setOptions(({ background, particles, ...options }: ISourceOptions) => {
      const { color, ...props } = particles as { color: { value: string } }; // why doesn't particles have color
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
          <Button onClick={toggle}>
            {darkTheme ? <LightMode /> : <DarkMode />}
          </Button>
          <Button onClick={setDialog}>
            <Settings />
          </Button>
        </nav>
        <Dialog open={dialog} onClose={setDialog} aria-labelledby="settings-dialog">
          <DialogTitle id="settings-dialog">Settings</DialogTitle>
          <DialogContent>
            <List>
              <ListItem className={classes.li}>
                <ListItemText>
                  Dark Mode
                </ListItemText>
                <Switch
                  checked={darkTheme}
                  onChange={toggle}
                  inputProps={{ 'aria-label': 'colour modes toggle' }}
                />
              </ListItem>
              <ListItem className={classes.li}>
                <ListItemText>
                  Background
                </ListItemText>
                <Autocomplete
                  className={classes.select}
                  options={['a', 'b']}
                  renderInput={(params) => <TextField {...params} label="Background Options" variant="outlined" />}
                />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={setDialog} color="primary" variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};