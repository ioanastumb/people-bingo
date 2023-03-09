import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidekickContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 4),
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidekickContent}>
      <Container maxWidth="md">
        Oops!
        <br /><br />
        We couldn't find any game session with the given URL.
        <br /><br />
        Maybe you mistyped a letter (happens to all of us, right?)
      </Container>
    </div>
  )
};

export default NotFound;