import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Title from '../Title';
import useStyles from './styling';
import NotFound from '../NotFound';
import { Paper, Card, CardContent, Button } from '@material-ui/core';
import Footer from '../Footer';
import BingoCard from '../BingoCard/BingoCard';
import { getBingoColor } from '../../logic/helpers';

const GameBuilder = ({ isInvalidGame, questions }) => {
  const classes = useStyles({ gridSize: 5, spaceBetweenItems: 20 });

  // declare a chosenGridSize state member
  // declare a chosenQuestions state member which should basically be just a list of question ids? 
  // declare a generatedGameUrl state member

  // onclick function for the chosenGridSize
  // onclick function for the "add me" buttons - has to be passed on allllll the way to the cards...
  // onclick function for the "generate game" button

  return (
    <>
      <CssBaseline />

      <div className={`${classes.generalLayout} ${classes.introLayout}`}>
        <Title />
        {
          isInvalidGame &&
          <NotFound />
        }
      </div>

      <main className={`${classes.generalLayout} ${classes.gameLayout}`}>
        <Paper elevation={3} className={classes.paper}>

          <div className={classes.instructions}>
            Choose the size of your People Bingo game
          </div>

          <div className={classes.container}>
            <div className={classes.configSizeDisplay}>
              <Card className={classes.configSizeCard}>
                <CardContent>
                  4
                </CardContent>
              </Card>
            </div>
            <div className={classes.configSizeDisplay}>
              <Card className={classes.configSizeCard}>
                <CardContent>
                  5
                </CardContent>
              </Card>
            </div>
            <div className={classes.configSizeDisplay}>
              <Card className={classes.configSizeCard}>
                <CardContent>
                  6
                </CardContent>
              </Card>
            </div>
            <div className={classes.configSizeDisplay}>
              <Card className={classes.configSizeCard}>
                <CardContent>
                  7
                </CardContent>
              </Card>
            </div>
          </div>

          <br /><br />

          <div className={classes.instructions}>
            Then choose which questions you want to appear!
          </div>

          <div className={`${classes.container} ${classes.questionsScroll}`}>
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
                          isFromBuilder={true}
                        />
                      </CardContent>
                    </Card>
                  </div>
                );
              })
            }
          </div>

          <br /><br />

          <div className={classes.testytesy}>
            <Button variant="contained">Generate game!</Button>
          </div>

          <br /><br />

          <div className={classes.testytesy}>
            <input type="text" />
          </div>

        </Paper>

        <div className={classes.footer}>
          <Footer />
        </div>

      </main>
    </>
  );
};

export default GameBuilder;
