import React from 'react';
import Particles from 'react-tsparticles';
import { ISourceOptions } from 'react-tsparticles';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  grey,
  blue,
  green,
} from '@material-ui/core/colors';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import initial from './presets/initial';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Podcasts from './pages/Podcasts';
import Projects from './pages/Projects';
import YouTube from './pages/YouTube';

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
  const [options, setOptions] = React.useState(initial as ISourceOptions);

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
          <Route exact path="/podcasts" component={Podcasts} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/YouTubeDistractionDisabler" component={YouTube} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
