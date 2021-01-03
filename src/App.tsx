import React from 'react';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { green, teal } from '@material-ui/core/colors';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      primary: {
        main: teal[200],
      },
      secondary: {
        main: green[500],
      },
      type: 'dark',
    },
  }), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles options={particlesOptions as ISourceOptions} />
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;