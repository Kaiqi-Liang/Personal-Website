import React from 'react';
import Particles from "react-tsparticles";
import { Switch, Route } from 'react-router-dom';
import { grey, blue, green } from '@material-ui/core/colors';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
import initial from './presets/initial';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function App() {
  const classes = useStyles();
  const [darkTheme, setDarkTheme] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [options, setOptions] = React.useState(initial);

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      primary: {
        main: darkTheme? green[800] : blue[400],
      },
      secondary: {
        main: grey[900],
      },
      type: darkTheme ? 'dark' : 'light',
    },
  }), [darkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles options={options} />
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        setOptions={setOptions}
      />
      <main className={classes.root}>
        <Switch>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
