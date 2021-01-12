import { makeStyles } from '@material-ui/core';
import Options from '../Options';

interface Props {
  darkTheme: boolean;
  options: Options;
}

const useStyles = makeStyles({
  background: {
    borderRadius: '30px',
    padding: '10vh 10vw',
    textAlign: 'center',
    background: ({ darkTheme, options }: Props) =>
      options.name === 'circles' ? '' : `rgba(${darkTheme ? '0, 0, 0,' : '203, 234, 251,'} 0.5)`,
  },
});

export default ({ darkTheme, options }: Props) => {
  const classes = useStyles({ darkTheme, options });
  return (
    <div className={classes.background}>
      <h1>Welcome to my website</h1>
      <h2>Hi, my name is Kaiqi Liang</h2>
    </div>
  );
};
