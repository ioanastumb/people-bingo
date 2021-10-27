import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import BingoCard from '../BingoCard/BingoCard';
import Footer from '../Footer';
import useStyles from './styling';
import { getBingoColor } from '../../logic/helpers';
import Title from '../Title';
import Rules from '../Rules';
import './BingoGame.css';

const BingoGame = ({ gameId, gridSize, questions, onChange, onBlur, handleReset, bingoCounter, isDoubleBingo }) => {
  const classes = useStyles({ gridSize: gridSize, spaceBetweenItems: 20 });

  return (
    <>
      <CssBaseline />

      <div className={`${classes.generalLayout} ${classes.introLayout}`}>
        <Title />        
        <Rules />
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