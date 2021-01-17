import React from 'react';
import { makeStyles, Theme, Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import Background from '../components/Background';
import linkedin from '../assets/images/linkedin.png';
import git from '../assets/icons/git.svg';
import python from '../assets/icons/python.svg';
import java from '../assets/icons/java.svg';
import react from '../assets/icons/react.svg';
import vue from '../assets/icons/vue.svg';
import c from '../assets/icons/c.svg';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import javascript from '../assets/icons/javascript.svg';
import typescript from '../assets/icons/typescript.svg';
import photoshop from '../assets/icons/photoshop.svg';
import illustrator from '../assets/icons/illustrator.svg';
import premierepro from '../assets/icons/premierepro.svg';

const skills = [
  git,
  python,
  java,
  react,
  vue,
  c,
  html,
  css,
  javascript,
  typescript,
  photoshop,
  illustrator,
  premierepro,
];

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: theme.spacing(3),
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 600,
    margin: `${theme.spacing(5)}px 0`,
    padding: theme.spacing(3),
    borderRadius: 30,
    background: '#fff',
  },
  container: {
    width: '10%',
    margin: `${theme.spacing(1)}px`,
  },
  icon: {
    width: '100%',
  },
}));

const Paragraph = styled.p({
  fontSize: '1.25em',
});

export default () => {
  const classes = useStyles();
  const getSkill = (skill: string) => (skill.split('/').pop() as string).split('.').shift() as string;
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
      <section className={classes.section}>
        {skills.map((skill) =>
          <div
            className={classes.container}
            key={skill}
          >
            <Tooltip title={getSkill(skill)} aria-label={getSkill(skill)}>
              <img
                className={classes.icon}
                src={skill}
                alt={getSkill(skill)}
              />
            </Tooltip>
          </div>
        )}
      </section>
      <Paragraph>
        More about me coming up soon!
      </Paragraph>
    </Background>
  );
};
