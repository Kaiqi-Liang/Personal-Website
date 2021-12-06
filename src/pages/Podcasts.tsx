import React from 'react';
import {
  makeStyles,
  Container,
  Link,
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
import internationalImage from '../assets/images/international.png';
import lecturersAudio from '../assets/audio/lecturers.mp3';
import thesisAudio from '../assets/audio/thesis.mp3';
import appianAudio from '../assets/audio/appian.mp3';
import internationalAudio from '../assets/audio/international.mp3';

const useStyles = makeStyles((theme) => ({
  section: {
    background: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    width: '100vw',
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
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
  title: string;
  date: string;
  description: string;
  image: string;
  audio: string;
  spotify: string;
  apple: string;
  google: string;
}

const podcasts: Podcast[] = [
  {
    title: 'Talking with Lecturers: John Shepherd and Andrew Taylor',
    date: '15 SEPTEMBER 2019',
    description: "In this week’s episode, Kaiqi and Jenny delve into the life of two prominent figures of the CSE faculty John Andrew Shepherd (Jas) and Andrew John Taylor, both senior lecturers at UNSW. Listen as they discuss their motivations and path into teaching as well as getting a little more insight about who they are outside of the lecture theatre.",
    image: lecturersImage,
    audio: lecturersAudio,
    spotify: 'https://open.spotify.com/embed-podcast/episode/5ERuxAuFrqDhhfQY613SNt',
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000449830345',
    google: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NzZXNvYy9mZWVkLnhtbA/episode/Y3Nlc29jLnBvZGJlYW4uY29tL3RhbGtpbmctd2l0aC1sZWN0dXJlcnMtam9obi1zaGVwaGVyZC1hbmQtYW5kcmV3LXRheWxvci02ZDdkN2VhNWNhZTQ0YWYyMDAwYWJmZjJhZjFkNDliMA?sa=X&ved=0CAUQkfYCahcKEwj4hsiI-JfuAhUAAAAAHQAAAAAQaQ',
  },
  {
    title: 'Thesis Rundown Pt 1 w/ Hui Wu',
    date: '17 FEBRUARY 2020',
    description: "In this week's episode Kaiqi sits down with Hui Wu, the 2019 CSE Thesis Coordinator. He has received a BE and ME from Huazhong University of Science and Technology, and has a PhD from the National University of Singapore. He has extensive professional experience, but today, he'll be chatting to us about everything thesis-related: Why it's important, how to choose a thesis topic, the thesis process, and the other key issues in doing a thesis.",
    image: thesisImage,
    audio: thesisAudio,
    spotify: 'https://open.spotify.com/embed-podcast/episode/5IvhVhVv9EgPBbLnqMKVCM',
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000465874216',
    google: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NzZXNvYy9mZWVkLnhtbA/episode/Y3Nlc29jLnBvZGJlYW4uY29tLzZkYjQyN2NiLTNiODctNWI5Ny1hZWQ5LTMzNjM0YTI3NDgwMQ?sa=X&ved=0CAUQkfYCahcKEwj4hsiI-JfuAhUAAAAAHQAAAAAQBA',
  },
  {
    title: 'Yappin with Appian w/ Kevin Huang & Miaad Hussain',
    date: '21 APRIL 2020',
    description: "In this week's episode, join Kaiqi and Ryan as they head into Appian's Sydney office to have a chat about Appian with Solution Engineer Kevin Huang and Principal Consultant Miaad Hussain and other UNSW graduates! They'll be talking about how they got into Appian, what exactly it is that Appian does, the culture, the benefits, and what the recruitment process is!",
    image: appianImage,
    audio: appianAudio,
    spotify: 'https://open.spotify.com/embed-podcast/episode/4hRIXeyl74V1OJB7VNbWPh',
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000472257209',
    google: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NzZXNvYy9mZWVkLnhtbA/episode/Y3Nlc29jLnBvZGJlYW4uY29tLzY1YmRiOGI0LTU0YTQtNTdhYi05NjkzLWJlMjVjZmM0MDVhNA?sa=X&ved=0CAUQkfYCahcKEwj4hsiI-JfuAhUAAAAAHQAAAAAQRQ',
  },
  {
    title: 'Stories from a Stranded International Student w/ Kaiqi Liang',
    date: '10 JUNE 2021',
    description: "Ever wondered why you’ve never seen CSESoc’s Arc Delegate in person 🤔?? Kaiqi is one of thousands of international students currently stranded in another country as COVID 🦠 has wrecked all plans of overseas travel ✈️🚫. Ryan and Angeni have an honest conversation with Kaiqi about current life as an international student.",
    image: internationalImage,
    audio: internationalAudio,
    spotify: 'https://open.spotify.com/embed/episode/2L6em3vav1vKzZfWoQXBd7',
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000524805828',
    google: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NzZXNvYy9mZWVkLnhtbA/episode/Y3Nlc29jLnBvZGJlYW4uY29tL2YzZjMwZTJmLWRkMDMtMzkyNC1hMjAwLTk4ZjA3MWQ3OTQ2Nw?sa=X&ved=0CAUQkfYCahcKEwiw14_5vs70AhUAAAAAHQAAAAAQAQ',
  },
];

interface Props {
  link: string;
  children: React.ReactNode;
}

const ButtonLink = ({ link, children }: Props) => (
  <Button
    color="primary"
    size="small"
    variant="contained"
  >
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  </Button>
);

const Anchor = ({ link, children }: Props) => (
  <Link
    color="inherit"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <em>{children}</em>
  </Link>
);

export default () => {
  const classes = useStyles();
  const [hover, setHover] = React.useReducer((hover) => !hover, false);
  return (
    <>
      <section
        className={classes.section}
        onMouseEnter={setHover}
        onMouseLeave={setHover}
      >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Podcasts
          </Typography>
          {hover && (
            <>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Echo is Computer Science Engineering Society (<Anchor link="http://csesoc.unsw.edu.au">CSESoc</Anchor>)'s own podcast where we talk about topics all over the place related to technology and university life.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                I produced the following episodes when I was a subcommittee member of the <Anchor link="https://media.csesoc.org.au">CSESoc Media Team</Anchor> and when I was an executive for the society.
              </Typography>
              <div className={classes.buttons}>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  You can check out other episodes on Echo via any of the platforms below or wherever you find your podcasts.
                </Typography>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <ButtonLink link="https://open.spotify.com/show/2h9OxTkeKNznIfNqMMYcxj">
                      Spotify
                    </ButtonLink>
                  </Grid>
                  <Grid item>
                    <ButtonLink link="https://podcasts.apple.com/au/podcast/echo/id1455157876">
                      Apple Podcasts
                    </ButtonLink>
                  </Grid>
                  <Grid item>
                    <ButtonLink link="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NzZXNvYy9mZWVkLnhtbA?sa=X&ved=0CAMQ4aUDahcKEwi4vMPA4aLuAhUAAAAAHQAAAAAQAQ">
                      Google Podcasts
                    </ButtonLink>
                  </Grid>
                </Grid>
              </div>
            </>
          )}
        </Container>
      </section>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {podcasts.map((podcast) => (
            <Grid key={podcast.title} item xs={12} sm={6} md={4} container justify="center">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={podcast.image}
                  title={podcast.title}
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
                  <ButtonLink link={podcast.spotify}>
                    Listen on Spotify
                  </ButtonLink>
                  <ButtonLink link={podcast.apple}>
                    Apple Podcasts
                  </ButtonLink>
                  <ButtonLink link={podcast.google}>
                    Google Podcasts
                  </ButtonLink>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
