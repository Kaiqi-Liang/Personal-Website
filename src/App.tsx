import React from 'react';
import Particles from "react-tsparticles";
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { orange, blue } from '@material-ui/core/colors';
import initial from './presets/initial';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  const [darkTheme, setDarkTheme] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [options, setOptions] = React.useState(initial);

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      primary: {
        main: blue[300],
      },
      secondary: {
        main: orange[900],
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
      <Switch>
        <Route exact path="/resume" component={Resume} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
