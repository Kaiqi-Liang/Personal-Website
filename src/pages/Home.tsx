import Background from '../components/Background';
import TextLoop from 'react-text-loop';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    marginBottom: '1em',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <Background>
      <Typography className={classes.text} component="h1" variant="h3">Kaiqi Liang</Typography>
      <Typography className={classes.text} component="h2" variant="h4">
        <TextLoop interval={1500}>
          {[
            'Programming',
            'Software Engineering',
            'Challenge',
          ]}
        </TextLoop>
        {' is my '}
        <TextLoop interval={1500}>
          {[
            'passion',
            'pursuit',
            'inspiration',
          ]}
        </TextLoop>
      </Typography>
      <Link to="/about">
        <Typography component="h3" variant="h5">Find out more...</Typography>
      </Link>
    </Background>
  );
};
