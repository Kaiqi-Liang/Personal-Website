import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
    </main>
  );
};
