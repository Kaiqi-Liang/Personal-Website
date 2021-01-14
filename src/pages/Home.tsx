import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { ThemeContext } from "../App";
import { Context } from '../Interface';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    borderRadius: '30px',
    padding: '10vh 10vw',
    textAlign: 'center',
    width: '50vw',
    minWidth: 600,
    maxWidth: 960,
    [theme.breakpoints.down('xs')]: {
      minWidth: 'unset',
      width: 'unset',
    },
    background: ({ darkTheme, options }: Context) =>
      options.name === 'circles' ? '' : `rgba(${darkTheme ? '0, 0, 0,' : '203, 234, 251,'} 0.5)`,
  },
}));

export default () => {
  const classes = useStyles(React.useContext(ThemeContext));
  return (
    <div className={classes.background}>
      <h1>Hi, my name is Kaiqi Liang!</h1>
      <h2>Programming is my passion, Software Engineering is my pursuit, global warming is my concern.</h2>
    </div>
  );
};
