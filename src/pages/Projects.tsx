import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Button,
} from '@material-ui/core';
import youtube from '../assets/images/youtube.png';
import website from '../assets/video/website.mov';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  gridItem: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
      flexBasis: '50%',
    },
  },
  card: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  cardActionArea: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'unset',
  },
  cardActions: {
    justifyContent: 'space-evenly',
  },
}));

interface Project {
  title: string;
  description: string;
  src: string;
  github: string;
  link: string;
  button: string;
}

const CardItem = ({ title, description, src, github, link, button }: Project) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid className={classes.gridItem} item xs={12} sm={6} md={4} container justify="center">
      <Card className={classes.card}>
        <CardActionArea
          className={classes.cardActionArea}
          onClick={() => history.push(`/projects/${title.split('').filter((ch) => ch !== ' ').join('')}`)}
        >
          <CardMedia
            component={src.indexOf('mov') > 0 ? 'video' : 'img'}
            autoPlay
            src={src}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" variant="contained">
            <a href={github} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </Button>
          <Button size="small" color="primary" variant="contained">
            <a href={link} target="_blank" rel="noreferrer">
              {button}
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <CardItem
          title="YouTube Distraction Disabler"
          description="A productivity Google Chrome extension which removes distracting video suggestions on YouTube."
          src={youtube}
          github="https://github.com/Kaiqi-Liang/YouTube-Distraction-Disabler"
          link="http://bit.ly/YoutubeDistractionDisabler"
          button="Chrome Store"
        />
        <CardItem
          title="Personal Website"
          description="The website you are looking at right now. Enjoy browsing!"
          src={website}
          github="https://github.com/Kaiqi-Liang/Personal-Website"
          link="https://kaiqi-liang.web.app"
          button="Link"
        />
      </Grid>
    </Container>
  );
};
