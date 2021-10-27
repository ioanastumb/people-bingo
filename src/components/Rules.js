import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Emoji from './Emoji';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidekickContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 4),
  }
}));

const Rules = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidekickContent}>
      <Container maxWidth="md">
        <List>
          <ListItem>
            <ListItemText disableTypography primary={<Typography style={{ fontWeight: 'bold' }}>Rules:</Typography>} />
          </ListItem>
          <ListItem>
            <Emoji symbol="📋" label="clipboard" />
            <ListItemText primary="Everyone receives the same questions in a random order." />
          </ListItem>
          <ListItem>
            <Emoji symbol="🤔" label="thinking-face" />
            <ListItemText primary="One by one, each participant asks the others a question from the game." />
          </ListItem>
          <ListItem>
            <Emoji symbol="🎉" label="party-popper" />
            <ListItemText disableTypography
              primary={<Typography>If the person being asked answers, <span style={{ fontWeight: 'bold' }}>everyone</span> in the group writes down their name in the bingo card.</Typography>} />
          </ListItem>
          <ListItem>
            <Emoji symbol="💯" label="hundred-points" />
            <ListItemText primary="The team decides when the game ends. It can be when somebody fills in either a row or a column, both, multiple - go wild!" />
          </ListItem>
        </List>
      </Container>
    </div>
  )
};

export default Rules;
