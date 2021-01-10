import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import lecturersImage from '../assets/images/lecturers.jpg';
import thesisImage from '../assets/images/thesis.jpg';
import appianImage from '../assets/images/appian.png';
import lecturersAudio from '../assets/audio/lecturers.mp3';
import thesisAudio from '../assets/audio/thesis.mp3';
import appianAudio from '../assets/audio/lecturers.mp3';

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  audio: {
    padding: 8,
  },
  cardActions: {
    justifyContent: 'space-evenly',
  },
}));

interface Podcast {
  title: string,
  date: string,
  description: string,
  image: string,
  audio: '*.mp3',
  apple: string,
  spotify: string,
}

const podcasts: Podcast[] = [
  {
    title: 'Talking with Lecturers: John Shepherd and Andrew Taylor',
    date: '15 SEPTEMBER 2019',
    description: "In this week’s episode, Kaiqi and Jenny delve into the life of two prominent figures of the CSE faculty John Andrew Shepherd (Jas) and Andrew John Taylor, both senior lecturers at UNSW. Listen as they discuss their motivations and path into teaching as well as getting a little more insight about who they are outside of the lecture theatre.",
    image: lecturersImage,
    audio: lecturersAudio,
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000449830345',
    spotify: 'https://open.spotify.com/embed-podcast/episode/5ERuxAuFrqDhhfQY613SNt',
  },
  {
    title: 'Thesis Rundown Pt 1 w/ Hui Wu',
    date: '17 FEBRUARY 2020',
    description: "In this week's episode Kaiqi sits down with Hui Wu, the 2019 CSE Thesis Coordinator. He has received a BE and ME from Huazhong University of Science and Technology, and has a PhD from the National University of Singapore. He has extensive professional experience, but today, he'll be chatting to us about everything thesis-related: Why it's important, how to choose a thesis topic, the thesis process, and the other key issues in doing a thesis.",
    image: thesisImage,
    audio: thesisAudio,
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000465874216',
    spotify: 'https://open.spotify.com/embed-podcast/episode/5IvhVhVv9EgPBbLnqMKVCM',
  },
  {
    title: 'Yappin with Appian w/ Kevin Huang & Miaad Hussain',
    date: '21 APRIL 2020',
    description: "In this week's episode, join Kaiqi and Ryan as they head into Appian's Sydney office to have a chat about Appian with Solution Engineer Kevin Huang and Principal Consultant Miaad Hussain and other UNSW graduates! They'll be talking about how they got into Appian, what exactly it is that Appian does, the culture, the benefits, and what the recruitment process is!",
    image: appianImage,
    audio: appianAudio,
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000472257209',
    spotify: 'https://open.spotify.com/embed-podcast/episode/4hRIXeyl74V1OJB7VNbWPh',
  },
];

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {podcasts.map((podcast) => (
          <Grid key={podcast.title} item xs={12} sm={6} md={4} container justify="center">
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={podcast.image}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {podcast.title}
                </Typography>
                <Typography gutterBottom>
                  {podcast.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="time">
                  {podcast.date}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.audio}
                controls
                component="audio"
                src={podcast.audio}
              />
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" variant="contained">
                  <a href={podcast.apple} target="_blank" rel="noreferrer">
                    Apple Podcasts
                  </a>
                </Button>
                <Button size="small" color="primary" variant="contained">
                  <a href={podcast.spotify} target="_blank" rel="noreferrer">
                    Spotify
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
