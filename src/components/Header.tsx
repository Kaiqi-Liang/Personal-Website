import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DarkMode from '@material-ui/icons/Brightness4';
import LightMode from '@material-ui/icons/Brightness7';
import Settings from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme } from '@material-ui/core/styles';
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
import { Options } from '../Interface';
import { ThemeContext } from "../App";

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
  changeTheme,
  setDialog,
}: {
  edge: boolean,
  darkTheme: boolean,
  changeTheme: () => void,
  setDialog: React.DispatchWithoutAction,
}) => {
  return (
    <>
      <IconButton
        edge={edge && "end"}
        onClick={changeTheme}
        aria-label="change theme"
      >
        {darkTheme ? <LightMode /> : <DarkMode />}
      </IconButton>
      <IconButton
        edge={edge && "end"}
        onClick={setDialog}
        aria-label="settings"
      >
        <Settings />
      </IconButton>
    </>
  );
};

interface Particles {
  color: {
    value: string,
  };
  links: {
    color: string,
  };
}

export default ({
  setDarkTheme,
  setOptions,
  backgrounds,
}: {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
  setOptions: React.Dispatch<React.SetStateAction<Options>>,
  backgrounds: Options[],
}) => {
  const classes = useStyles();
  const { darkTheme, options } = React.useContext(ThemeContext);
  const [dialog, setDialog] = React.useReducer((dialog) => !dialog, false);
  const [drawer, setDrawer] = React.useReducer((drawer) => !drawer, false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
    changeBackground(darkTheme);
  };

  const changeBackground = (darkTheme: boolean) => {
    setOptions((options: Options) => {
      const newOptions: Options = JSON.parse(JSON.stringify(options));
      (newOptions.background as { color: string }).color = darkTheme ? "#cbeafb" : "#000";
      const particles = newOptions.particles as Particles;
      if (particles.links) particles.links.color = darkTheme ? "#000" : "#fff";
      if (newOptions.colorChange) particles.color.value = darkTheme ? "#000" : "#fff";
      return newOptions;
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
            changeTheme={changeTheme}
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
                  onChange={changeTheme}
                  inputProps={{ 'aria-label': 'change theme' }}
                />
              </ListItem>
              <ListItem className={classes.li}>
                <ListItemText>
                  Background
                </ListItemText>
                <Autocomplete
                  className={classes.select}
                  options={backgrounds.map((background) => background.name)}
                  renderInput={(params) => <TextField {...params} label="Background Options" variant="outlined" />}
                  value={options.name}
                  onChange={(_, value) => {
                    if (value) {
                      setOptions(backgrounds.find((background) => background.name === value) as Options);
                      changeBackground(!darkTheme); // TODO: this is a hack for react state not being updated until the next rendering
                    }
                  }}
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
            changeTheme={changeTheme}
            setDialog={setDialog}
          />
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};
