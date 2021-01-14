import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { ThemeContext } from "../App";
import { Context } from '../Interface';

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    borderRadius: 30,
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

export default ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles(React.useContext(ThemeContext));
  return (
    <div className={classes.background}>
        {children}
    </div>
  );
};