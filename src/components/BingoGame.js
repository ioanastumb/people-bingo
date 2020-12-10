import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BingoCard from './BingoCard';
import Emoji from './Emoji';
import { checkForBingo, getQuestionsOrder, isBingoQuestionAnswered } from '../logic/bingo-logic';
import './BingoGame.css';

// styling
const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  sidekickContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 4),
  },
  bingoContent: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(1),
    margin: theme.spacing(2, 0, 2),
    fontSize: 34
  },
  doubleBingoContent: {
    position: "fixed",
    bottom: theme.spacing(8),
    left: theme.spacing(1),
    margin: theme.spacing(2, 0, 2),
    fontSize: 22
  },
  bold: {
    fontWeight: 'bold'
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  card: {
    height: 160
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: props => -props.spaceBetweenItems * 0.5
  },
  item: {
    display: 'block',
    flex: 'none',
    width: props => 100 / props.gridSize + '%',
    boxSizing: 'border-box',
    padding: props => props.spaceBetweenItems * 0.5
  }
}));

function BingoGame({ data, gridSize }) {
  const classes = useStyles({ gridSize: gridSize, spaceBetweenItems: 20 });
  const [questions, setQuestions] = useState([]);
  const [bingoCounter, setBingoCounter] = useState(0);
  const [isDoubleBingo, setIsDoubleBingo] = useState(false);

  useEffect(() => {
    // let shuffledQuestions = JSON.parse(localStorage.getItem('shuffledQuestions')) || getQuestionsOrder(data);
    let shuffledQuestions = getQuestionsOrder(data);

    setQuestions(shuffledQuestions);
  }, [data]);

  React.useEffect(() => {
    localStorage.setItem('shuffledQuestions', JSON.stringify(questions))
  }, [questions]);

  const handleOnBlur = (index, answer, reason) => {
    const updatedQuestions = questions.slice(0);
    updatedQuestions[index].answer = answer || updatedQuestions[index].answer;
    updatedQuestions[index].reason = reason || updatedQuestions[index].reason;
    updatedQuestions[index].isAnswered = isBingoQuestionAnswered(updatedQuestions[index]);
    setQuestions(updatedQuestions);

    let isRowBingo = checkForBingo(updatedQuestions, index, 'row', gridSize);
    let isColumnBingo = checkForBingo(updatedQuestions, index, 'column', gridSize);

    if (isRowBingo && isColumnBingo) {
      setBingoCounter(bingoCounter + 2);
      setIsDoubleBingo(true);
    }
    else if (isRowBingo || isColumnBingo) {
      setBingoCounter(bingoCounter + 1);
    }
  }

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              People Bingo!
            </Typography>
          </Container>
        </div>
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

        <div className={classes.bingoContent}>
          <Container maxWidth="sm">
            {
              bingoCounter > 0 &&
              <>
                <span>Bingo! x</span><span>{bingoCounter}</span>
              </>
            }
          </Container>
        </div>

        <div className={classes.doubleBingoContent}>
          <Container maxWidth="sm">
            {
              isDoubleBingo && <span>Whoa! Double bingo!</span>
            }
          </Container>
        </div>

        <Paper elevation={3} className={classes.paper}>
          <div className={classes.container}>
            {
              questions.map((question, index) => (
                <div key={index} className={classes.item}>

                  <Card className={classes.card}>
                    <CardContent>
                      <BingoCard
                        index={index}
                        question={question}
                        onBlur={handleOnBlur}
                      />
                    </CardContent>
                  </Card>

                </div>
              ))
            }
          </div>
        </Paper>
      </main >
    </>
  );
}

export default BingoGame;