import React from 'react';
import { makeStyles, Theme, Tooltip } from '@material-ui/core';
import { ThemeContext } from '../App';
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
import photoshop_line from '../assets/icons/photoshop-line.svg';
import photoshop_plain from '../assets/icons/photoshop-plain.svg';
import illustrator_line from '../assets/icons/illustrator-line.svg';
import illustrator_plain from '../assets/icons/illustrator-plain.svg';
import premierepro_line from '../assets/icons/premierepro-line.svg';
import premierepro_plain from '../assets/icons/premierepro-plain.svg';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 600,
    margin: `${theme.spacing(5)}px 0`,
    padding: theme.spacing(3),
    borderRadius: 30,
  },
  container: {
    width: '10%',
    margin: `${theme.spacing(1)}px`,
  },
  icon: {
    width: '100%',
  },
}));

export default () => {
  const classes = useStyles();
  const { darkTheme, options } = React.useContext(ThemeContext);

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
    options.name === 'circles' ? photoshop_line : darkTheme ? photoshop_line : photoshop_plain,
    options.name === 'circles' ? illustrator_line : darkTheme ? illustrator_line : illustrator_plain,
    options.name === 'circles' ? premierepro_line : darkTheme ? premierepro_line : premierepro_plain,
  ];

  const getSkill = (skill: string) => ((skill.split('/').pop() as string)
    .split('.').shift() as string)
    .split('-').shift() as string;

  return (
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
  );
};
