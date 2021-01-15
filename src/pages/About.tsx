import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';
import Background from '../components/Background';
import linkedin from "../assets/images/linkedin.png";

const useStyles = makeStyles({
  img: {
    width: '100%',
    borderRadius: '50%',
  },
});

const Paragraph = styled.p({
  fontSize: '1.25em',
});

export default () => {
  const classes = useStyles();
  return (
    <Background>
      <img
        className={classes.img}
        src={linkedin}
        alt="LinkedIn Profile Picture"
      />
      <Paragraph>
        I am a <strong>Computer Science</strong> student at University of New South Wales (<strong>UNSW</strong>) and an <strong>Academic Tutor</strong> for several computing courses. Apart from that I am also an <strong>Environmentalist</strong>.
      </Paragraph>
      <Paragraph>
        I am the kind of person who always aims for perfection, even though most of the time it is unachievable, what matters the most is at end the end of the day I can tell myself that I tried my best and I have achieved the <strong>excellence</strong>.
      </Paragraph>
      <Paragraph>
        More about me coming up soon!
      </Paragraph>
    </Background>
  );
};
