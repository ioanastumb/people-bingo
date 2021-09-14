import './GameWrapper.css';
import BingoGame from '../BingoGame/BingoGame';
import { createGame } from '../../logic/game';
import questions from '../../questions.json';
import games from '../../games.json';

const GameWrapper = () => {
  const game = createGame("g1", games, questions);

  return (
    <>
      {
        game.isValid &&
        <BingoGame
          data={game.questions}
          gridSize={game.gridSize}
        />
      }

      {
        !game.isValid &&
        <p>
          Oops!
          <br /><br />
          We couldn't find any game session with the given URL.
          <br /><br />
          Maybe you mistyped a letter (happens to all of us, right?)
        </p>
      }
    </>
  );
}

export default GameWrapper;