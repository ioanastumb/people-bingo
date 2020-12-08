import React from 'react';
import './BingoCard.css';

const BingoCard = props => {
  let guessedColor = props.guessed ? "red" : "black";

  return (
    <div className="bingo-card">
      <span style={{ color: guessedColor }}>Question text: {props.questionText}</span>
      <br />
      <input type="text" onBlur={event => props.onBlur(props.index, event.target.value)} />
      <br /><br />
    </div>
  );
}

export default BingoCard;
