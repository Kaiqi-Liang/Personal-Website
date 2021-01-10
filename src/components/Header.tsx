import React from 'react';
import { ISourceOptions } from 'react-tsparticles';
import { Link, useLocation } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import DarkMode from '@material-ui/icons/Brightness4';
import LightMode from '@material-ui/icons/Brightness7';
import Settings from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Button,
  IconButton,
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
  SwipeableDrawer,
  Divider,
} from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  ul: {
    display: 'flex',
    padding: 0,
  },
  li: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  select: {
    marginLeft: 24,
    width: 200,
  },
  nav: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  menu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Nav = ({ flex }: { flex: boolean }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const variant = (currPath: string) => pathname === currPath ? "outlined" : "text";

  return (
    <List className={flex ? classes.ul : ''}>
      <ListItem className={flex ? classes.li : ''}>
        <Button className={classes.bold} variant={variant("/resume")}>
          <Link to='/resume'>RESUME</Link>
        </Button>
      </ListItem>
      <ListItem className={flex ? classes.li : ''}>
        <Button className={classes.bold} variant={variant("/projects")}>
          <Link to='/projects'>PROJECTS</Link>
        </Button>
      </ListItem>
      <ListItem className={flex ? classes.li : ''}>
        <Button className={classes.bold} variant={variant("/podcasts")}>
          <Link to='/podcasts'>PODCASTS</Link>
        </Button>
      </ListItem>
    </List>
  );
};

const Icons = ({
  edge,
  darkTheme,
  toggle,
  setDialog,
}: {
  edge: boolean,
  darkTheme: boolean,
  toggle: () => void,
  setDialog: React.DispatchWithoutAction,
}) => {
  return (
    <>
      <IconButton edge={edge && "end"} onClick={toggle}>
        {darkTheme ? <LightMode /> : <DarkMode />}
      </IconButton>
      <IconButton edge={edge && "end"} onClick={setDialog}>
        <Settings />
      </IconButton>
    </>
  );
};

export default ({
  darkTheme,
  setDarkTheme,
  setOptions,
}: {
  darkTheme: boolean,
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
  setOptions: React.Dispatch<React.SetStateAction<ISourceOptions>>,
}) => {
  const classes = useStyles();
  const [dialog, setDialog] = React.useReducer((dialog) => !dialog, false);
  const [drawer, setDrawer] = React.useReducer((drawer) => !drawer, false);

  const toggle = () => {
    setDarkTheme(!darkTheme);
    setOptions(({ background, particles, ...options }: ISourceOptions) => {
      const { color, ...props } = particles as { color: { value: string } }; // why doesn't particles have color
      return {
        background: {
          color: {
            value: darkTheme ? "#cbeafb" : "#000",
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
      <Toolbar className={classes.flex}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.bold}
        >
          Kaiqi Liang
        </Typography>
        <nav className={`${classes.flex} ${classes.nav}`}>
          <Nav flex={true}/>
          <Icons
            edge={true}
            darkTheme={darkTheme}
            toggle={toggle}
            setDialog={setDialog}
          />
        </nav>
        <IconButton
          onClick={setDrawer}
          edge="end"
          className={classes.menu}
          aria-label="toggle drawer"
        >
          <MenuIcon />
        </IconButton>
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
        <SwipeableDrawer
          anchor="right"
          open={drawer}
          onClose={setDrawer}
          onOpen={setDrawer}
        >
          <Nav flex={false}/>
          <Divider />
          <Icons
            edge={false}
            darkTheme={darkTheme}
            toggle={toggle}
            setDialog={setDialog}
          />
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};
