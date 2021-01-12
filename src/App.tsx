import React from 'react';
import Particles from 'react-tsparticles';
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
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Podcasts from './pages/Podcasts';
import Projects from './pages/Projects';
import YouTube from './pages/YouTube';
import Options from './Options';
import stars from './presets/stars';
import fire from './presets/fire';
import snow from './presets/snow';
import molecules from './presets/molecules';
import bubbles from './presets/bubbles';
import links from './presets/links';
import circles from './presets/circles';
import gumballs from './presets/gumballs';
import spring from './presets/spring';

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
  const [options, setOptions] = React.useState(links as Options);
  const backgrounds: Options[] = [
    stars as Options,
    fire as Options,
    snow as Options,
    molecules as Options,
    bubbles as Options,
    links as Options,
    circles as Options,
    gumballs as Options,
    spring as Options,
  ];

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
        options={options}
        setOptions={setOptions}
        backgrounds={backgrounds}
      />
      <main className={classes.root}>
        <Switch>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/podcasts" component={Podcasts} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/YouTubeDistractionDisabler" component={YouTube} />
          <Route path="/" render={() => <Home darkTheme={darkTheme} options={options} />} />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
