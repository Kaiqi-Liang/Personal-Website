import React from 'react';
import {
  makeStyles,
  Link,
  Typography,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    maxHeight: '100px',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Big Brain
    </Link>
  </Typography>
);

export default () => {
  const classes = useStyles();
  const [time, setTime] = React.useState(new Date().toLocaleString());
  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">
          <time>{time}</time>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
