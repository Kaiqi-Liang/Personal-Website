import { makeStyles } from '@material-ui/core';
import Background from '../components/Background';

const useStyles = makeStyles({
  p: {
    fontSize: '1.25em',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <Background>
      <p className={classes.p}>I am a <strong>Computer Science</strong> student at University of New South Wales (<strong>UNSW</strong>) and an <strong>Academic Tutor</strong> for several computing courses. Apart from that I am also an <strong>Environmentalist</strong>.</p>
      <p className={classes.p}>I am the kind of person who always aims for perfection, even though most of the time it is unachievable, what matters the most is at end the end of the day I can tell myself that I tried my best and I have achieved the <strong>excellence</strong>.</p>
    </Background>
  );
};
