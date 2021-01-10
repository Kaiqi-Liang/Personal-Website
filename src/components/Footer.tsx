import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  Typography,
  Container,
  Link,
  Tooltip,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    maxHeight: 100,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary">
    {'Copyright © '}
    <Link color="inherit" href="#">
      Kaiqi Liang
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
      <Container maxWidth="sm" className={classes.container}>
        <div>
          <Typography variant="body1">
            <time>{time}</time>
          </Typography>
          <Copyright />
        </div>
        <div className={classes.icons}>
          <Tooltip title="LinkedIn" aria-label="LinkedIn">
            <Link target="_blank" href="https://www.linkedin.com/in/kaiqiliang/">
              <LinkedInIcon />
            </Link>
          </Tooltip>
          {'\u00A0'}
          <Tooltip title="GitHub" aria-label="GitHub">
            <Link target="_blank" href="https://github.com/Kaiqi-Liang">
              <GitHubIcon />
            </Link>
          </Tooltip>
        </div>
      </Container>
    </footer>
  );
};
