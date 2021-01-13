import { makeStyles, Theme } from '@material-ui/core';
import Options from '../Options';

interface Props {
  darkTheme: boolean;
  options: Options;
}

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
    background: ({ darkTheme, options }: Props) =>
      options.name === 'circles' ? '' : `rgba(${darkTheme ? '0, 0, 0,' : '203, 234, 251,'} 0.5)`,
  },
}));

export default ({ darkTheme, options }: Props) => {
  const classes = useStyles({ darkTheme, options });
  return (
    <div className={classes.background}>
      <h1>Hi, my name is Kaiqi Liang!</h1>
      <h2>Programming is my passion, Software Engineering is my pursuit, global warming is my concern.</h2>
    </div>
  );
};
