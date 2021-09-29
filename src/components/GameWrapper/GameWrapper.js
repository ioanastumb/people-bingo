import { useState, useEffect } from 'react';
import './GameWrapper.css';
import BingoGame from '../BingoGame/BingoGame';
import { createGame } from '../../logic/game';
import { checkForBingo, getQuestionsOrder, isBingoQuestionAnswered } from '../../logic/bingo-logic';
import { isEmpty } from '../../logic/helpers';

const GameWrapper = ({ gameId, games, questions}) => {
  const [game] = useState(createGame(gameId, games, questions));
  const [gameSessions, setGameSessions] = useState({});
  const [bingoCounter, setBingoCounter] = useState(0);
  const [isDoubleBingo, setIsDoubleBingo] = useState(false); 

  useEffect(() => {
    if (game.isValid) {
      let storageSessions = JSON.parse(localStorage.getItem('gameSessions')) || {}; 

      if (isEmpty(storageSessions[game.gameId])) {
        let shuffledQuestions = getQuestionsOrder(game.questions);
        storageSessions[game.gameId] = shuffledQuestions;
      }
  
      setGameSessions(storageSessions);
    }
  }, [game]);

  useEffect(() => {
    if (Object.keys(gameSessions).length !== 0) {
      localStorage.setItem('gameSessions', JSON.stringify(gameSessions))
    }
  }, [gameSessions]);

  const handleOnChange = (index, answer, reason, type) => {
    let currentGameSessions = {...gameSessions};
    if (type === 'answer') {
      currentGameSessions[game.gameId][index].answer = answer;
    }
    if (type === 'reason') {
      currentGameSessions[game.gameId][index].reason = reason;
    }
    setGameSessions(currentGameSessions);
  }

  const handleOnBlur = (index, answer, reason, type) => {
    let currentGameSessions = {...gameSessions};
    if (type === 'answer') {
      currentGameSessions[game.gameId][index].answer = answer;
    }
    if (type === 'reason') {
      currentGameSessions[game.gameId][index].reason = reason;
    }
    currentGameSessions[game.gameId][index].isAnswered = isBingoQuestionAnswered(currentGameSessions[game.gameId][index]);
    setGameSessions(currentGameSessions);

    let isRowBingo = checkForBingo(currentGameSessions[game.gameId], index, 'row', game.gridSize);
    let isColumnBingo = checkForBingo(currentGameSessions[game.gameId], index, 'column', game.gridSize);

    if (isRowBingo && isColumnBingo) {
      setBingoCounter(bingoCounter + 2);
      setIsDoubleBingo(true);
    }
    else if (isRowBingo || isColumnBingo) {
      setBingoCounter(bingoCounter + 1);
    }
  }

  const handleReset = () => {
    let currentGameSessions = {...gameSessions};
    let shuffledQuestions = getQuestionsOrder(currentGameSessions[game.gameId]);
    currentGameSessions[game.gameId] = shuffledQuestions;
    setGameSessions(currentGameSessions);
    setBingoCounter(0);
    setIsDoubleBingo(false);
  }

  return (
    <>
      {
        game.isValid &&
        gameSessions[game.gameId] &&
        <BingoGame
          gameId={game.gameId}
          gridSize={game.gridSize}
          questions={gameSessions[game.gameId]}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          handleReset={handleReset}
          bingoCounter={bingoCounter}
          isDoubleBingo={isDoubleBingo}
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