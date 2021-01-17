import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import {
  makeStyles,
  Tooltip,
  ClickAwayListener,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles({
  floating: {
    position: 'fixed',
    bottom: 76,
    right: 0,
  },
  tooltip: {
    fontSize: '1.25em',
    lineHeight: '20px',
  },
});

export default () => {
  const classes = useStyles();
  const [help, setHelp] = React.useState(false);
  return (
      <div className={`${classes.floating}`}>
        <ClickAwayListener onClickAway={() => setHelp(false)}>
          <Tooltip
            title={
              <article className={classes.tooltip}>
                <h4>Wanna see more cool stuff ?</h4>
                <p>Click the gear icon at the top right corner to change the background. If you don't see it click the menu icon first.</p>
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
  );
};
