import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import { ThemeContext } from '../App';
import { Options } from '../Interface';
import logo from '../assets/images/logo.png';

interface Props {
  loading: boolean;
  darkTheme: boolean;
  options: Options;
}

const useStyles = makeStyles((theme: Theme) => ({ // TODO why can't Theme be removed like in Background.tsx and use type inference
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    borderRadius: 30,
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5em',
    },
    background: ({ darkTheme, options }: Props) =>
      darkTheme && options.name !== 'circles' ? 'linear-gradient(to right, #424242, transparent)' : '',
  },
  logo: {
    width: '10%',
    marginRight: theme.spacing(2),
  },
  player: {
    width: '50vw !important',
    height: '30vw !important',
  },
  overview: {
    borderRadius: 30,
    padding: '1vh 1vw',
    width: '50%',
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    background: ({ darkTheme, options }) =>
      options.name === 'circles' ? '' : `rgba(${darkTheme ? '0, 0, 0,' : '203, 234, 251,'} 0.5)`,
  },
  visibility: {
    display: ({ loading }) => loading ? 'none' : 'block',
  },
}));

export default () => {
  const { darkTheme, options } = React.useContext(ThemeContext);
  const [loading, setLoading] = React.useReducer(() => false, true);
  const classes = useStyles({ loading, darkTheme, options });
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <div className={classes.title}>
        <img
          className={classes.logo}
          src={logo}
          alt="logo"
        />
        <h1>YouTube Distraction Disabler</h1>
      </div>
      {loading && <Skeleton className={classes.player} variant="rect" />}
      <ReactPlayer
        className={`${classes.player} ${classes.visibility}`}
        url="https://youtu.be/gzbG9_geONI"
        onReady={setLoading}
      />
      <div className={classes.overview}>
        <p>Remove distracting video suggestions on YouTube.</p>
        <p>Just spent an hour on YouTube but still haven't got to the video that you set out to watch? Wanted to learn something on YouTube but always get distracted by your recommended feed? Fear no more, "YouTube Distraction Disabler" is here to remove all of the unrelated videos on YouTube and only show you what you want.</p>
        <p>Finally got some free time and want to deliberately procrastinate on YouTube? That's ok too, just simply click the extension icon and turn off one of the options that you choose to block. The options are "Home", "Related", "Comments" and "Notifications", which corresponds to your home feed, related videos next to the video you're currently watching, the comments down below as well as the notification bell.</p>
      </div>
    </Container>
  );
};
