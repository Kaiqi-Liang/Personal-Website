import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';

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
      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
        color="primary"
        startIcon={<DashboardIcon />}
      >
        Dashboard
      </Button>
    </main>
  );
};
