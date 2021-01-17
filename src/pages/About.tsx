import { makeStyles, Theme } from '@material-ui/core';
import styled from 'styled-components';
import Background from '../components/Background';
import Skills from '../components/Skills';
import linkedin from '../assets/images/linkedin.png';

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: theme.spacing(3),
  },
}));

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
        alt="LinkedIn Profile"
      />
      <Paragraph>
        I am a <strong>Computer Science</strong> student at the University of New South Wales (<strong>UNSW</strong>) and an <strong>Academic Tutor</strong> for several computing courses. Apart from that I am also an <strong>Environmentalist</strong>.
      </Paragraph>
      <Paragraph>
        I am the kind of person who always aims for perfection, even though most of the time it is unachievable, what matters the most is at the end of the day I can tell myself that I tried my best and I have achieved <strong>excellence</strong>.
      </Paragraph>
      <Skills />
      <Paragraph>
        More about me coming up soon!
      </Paragraph>
    </Background>
  );
};
