import './App.css';
import { Helmet } from 'react-helmet';
import { Router } from "@reach/router"
import GameWrapper from '../GameWrapper/GameWrapper';
import questions from '../../questions.json';
import games from '../../games.json';
import GameBuilder from '../GameBuilder/GameBuilder';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bingo bango bongo</title>
      </Helmet>

      <Router>
        <GameWrapper
          path="/people-bingo/games/:gameId"
          games={games}
          questions={questions} />
        <GameBuilder
          isInvalidGame={false}
          questions={questions}
          default
        />
        {/* <GameWrapper 
          default
          gameId={"g1"}
          games={games}
          questions={questions} /> */}
      </Router>
    </>
  );
}

export default App;