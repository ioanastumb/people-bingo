import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import BingoCard from '../BingoCard/BingoCard';
import Emoji from '../Emoji';
import Footer from '../Footer';
import useStyles from './styling';
import { getBingoColor } from '../../logic/helpers';
import './BingoGame.css';

const BingoGame = ({ gameId, gridSize, questions, onChange, onBlur, handleReset, bingoCounter, isDoubleBingo }) => {
  const classes = useStyles({ gridSize: gridSize, spaceBetweenItems: 20 });

  return (
    <>
      <CssBaseline />

      <div className={`${classes.generalLayout} ${classes.introLayout}`}>
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
      </div>
      
      <main className={`${classes.generalLayout} ${classes.gameLayout}`}>
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
              questions.map((question, index) => {
                let color = question.isAnswered ? getBingoColor() : question.color;
                return (
                  <div key={index} className={classes.item}>
                    <Card className={classes.card} style={{ backgroundColor: color }}>
                      <CardContent>
                        <BingoCard
                          index={index}
                          question={question}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      </CardContent>
                    </Card>
                  </div>
                );
              })
            }
          </div>
        </Paper>

        <div className={classes.footer}>
          <Footer />
        </div>

        <div className={classes.resetButton}>
          <Container maxWidth="sm">
            <Button variant="contained" onClick={event => handleReset()}>Reset</Button>
          </Container>
        </div>
      </main >
    </>
  );
}

export default BingoGame;