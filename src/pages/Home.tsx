import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import { makeStyles,
  Tooltip,
  ClickAwayListener,
  IconButton,
  Theme,
} from '@material-ui/core';
import Options from '../Options';

interface Props {
  darkTheme: boolean;
  options: Options;
}

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    borderRadius: '30px',
    padding: '10vh 10vw',
    textAlign: 'center',
    width: '50vw',
    minWidth: 600,
    maxWidth: 960,
    [theme.breakpoints.down('xs')]: {
      minWidth: 'unset',
      width: 'unset',
    },
    background: ({ darkTheme, options }: Props) =>
      options.name === 'circles' ? '' : `rgba(${darkTheme ? '0, 0, 0,' : '203, 234, 251,'} 0.5)`,
  },
  floating: {
    position: 'fixed',
    bottom: 76,
    right: 0,
  },
  tooltip: {
    lineHeight: '20px',
  },
  p: {
    fontSize: '1.25em',
  },
}));

export default ({ darkTheme, options }: Props) => {
  const classes = useStyles({ darkTheme, options });
  const [help, setHelp] = React.useState(false);
  return (
    <div className={classes.background}>
      <h1>Hi, my name is Kaiqi Liang</h1>
      <h2>Programming is my passion, Software Engineering is my pursuit, global warming is my concern!</h2>
      <p className={classes.p}>I am a <strong>Computer Science</strong> student at University of New South Wales (<strong>UNSW</strong>) and an <strong>Academic Tutor</strong> for several computing courses. Apart from that I am also an <strong>Environmentalist</strong>.</p>
      <p className={classes.p}>I am the kind of person who always aims for perfection, even though most of the time it is unachievable, what matters the most is at end the end of the day I can tell myself that I tried my best and I have achieved the <strong>excellence</strong>.</p>
      <div className={`${classes.floating}`}>
        <ClickAwayListener onClickAway={() => setHelp(false)}>
          <Tooltip
            title={
              <article className={`${classes.tooltip} ${classes.p}`}>
                <h4>Wanna see more cool stuff ?</h4>
                <p>Click the gear icon at the top right corner to change the background. If you don't see it click the menu icon first.</p>
                <p>More options are coming in the future whenever possible!</p>
              </article>
            }
            aria-label="help"
            arrow
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="top"
            open={help}
            onClose={() => setHelp(false)}
          >
            <IconButton
              color="primary"
              onClick={() => setHelp((help) => !help)}
            >
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </ClickAwayListener>
      </div>
    </div>
  );
};
