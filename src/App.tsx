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
import Help from './components/Help';
import Home from './pages/Home';
import About from './pages/About';
import Podcasts from './pages/Podcasts';
import Projects from './pages/Projects';
import YouTube from './pages/YouTube';
import { Options, Context } from './Interface';
import stars from './presets/stars';
import flames from './presets/flames';
import snow from './presets/snow';
import molecules from './presets/molecules';
import bubbles from './presets/bubbles';
import links from './presets/links';
import connections from './presets/connections';
import circles from './presets/circles';
import gumballs from './presets/gumballs';
import spring from './presets/spring';

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const preferColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
export const ThemeContext = React.createContext({ darkTheme: preferColorScheme, options: links } as Context);

function App() {
  const classes = useStyles();
  const [darkTheme, setDarkTheme] = React.useState(preferColorScheme);
  const [options, setOptions] = React.useState(links as Options);
  const backgrounds: Options[] = [
    stars as Options,
    flames as Options,
    snow as Options,
    molecules as Options,
    bubbles as Options,
    links as Options,
    connections as Options,
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
    <ThemeContext.Provider value={{ darkTheme, options }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Particles options={options} />
        <Header
          setDarkTheme={setDarkTheme}
          setOptions={setOptions}
          backgrounds={backgrounds}
        />
        <main className={classes.root}>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/podcasts" component={Podcasts} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/YouTubeDistractionDisabler" component={YouTube} />
            <Route path="/" component={Home} />
          </Switch>
          <Help />
        </main>
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
