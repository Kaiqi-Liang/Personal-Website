import {
  makeStyles,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import lecturers from '../assets/lecturers.jpg';
import thesis from '../assets/thesis.jpg';
import appian from '../assets/appian.png';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    width: '100%',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardActionArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [
  {
    title: 'Talking with Lecturers: John Shepherd and Andrew Taylor',
    date: '15 SEPTEMBER 2019',
    description: "In this week’s episode, we delve into the life of two prominent figures of the CSE faculty John Andrew Shepherd (Jas) and Andrew John Taylor, both senior lecturers at UNSW. Listen as they discuss their motivations and path into teaching as well as getting a little more insight about who they are outside of the lecture theatre.",
    image: lecturers,
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000449830345',
    spotify: '',
  },
  {
    title: 'Thesis Rundown Pt 1 w/ Hui Wu',
    date: '17 FEBRUARY 2020',
    description: "In this week's episode Kaiqi sits down with Hui Wu, the 2019 CSE Thesis Coordinator. He has received a BE and ME from Huazhong University of Science and Technology, and has a PhD from the National University of Singapore. He has extensive professional experience, but today, he'll be chatting to us about everything thesis-related: Why it's important, how to choose a thesis topic, the thesis process, and the other key issues in doing a thesis.",
    image: thesis,
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000465874216',
    spotify: '',
  },
  {
    title: 'Yappin with Appian w/ Kevin Huang & Miaad Hussain',
    date: '21 APRIL 2020',
    description: "This episode, join Kaiqi and Ryan as they head into Appian's Sydney  office to have a chat about Appian with Solution Engineer Kevin Huang and Principal Consultant Miaad Hussain and other UNSW graduates! They'll be talking about how they got into Appian, what exactly it is that Appian does, the culture, the benefits, and what the recruitment process is!",
    image: appian,
    apple: 'https://podcasts.apple.com/au/podcast/echo/id1455157876?i=1000472257209',
    spotify: '',
  },
];

export default () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} container justify="center">
            <Card className={classes.card}>
              <CardActionArea className={classes.cardActionArea}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography gutterBottom>
                    {card.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="time">
                    {card.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained">
                  <a href={card.apple} target="_blank">
                    Apple Podcasts
                  </a>
                </Button>
                <Button size="small" color="primary" variant="contained">
                  <a href={card.spotify} target="_blank">
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
