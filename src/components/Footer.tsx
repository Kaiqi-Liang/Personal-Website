import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  makeStyles,
  Typography,
  Container,
  Link,
  Tooltip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary">
    {'Copyright © '}
    <Link color="inherit" href="#">
      Kaiqi Liang
    </Link>
    {' 2021.'}
  </Typography>
);

export default () => {
  const classes = useStyles();
  // TODO why doesn't this complain about not having rel="noreferrer"
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm" className={classes.container}>
        <Copyright />
        <div className={classes.icons}>
          <Tooltip title="LinkedIn" aria-label="LinkedIn">
            <Link
              className={classes.link}
              target="_blank"
              href="https://www.linkedin.com/in/kaiqiliang"
            >
              <LinkedInIcon />
            </Link>
          </Tooltip>
          {'\u00A0'}
          <Tooltip title="GitHub" aria-label="GitHub">
            <Link
              className={classes.link}
              target="_blank"
              href="https://github.com/Kaiqi-Liang"
            >
              <GitHubIcon />
            </Link>
          </Tooltip>
        </div>
      </Container>
    </footer>
  );
};
