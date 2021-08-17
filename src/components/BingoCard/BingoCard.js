import React from 'react';
import BingoDefaultCard from './BingoDefaultCard';
import BingoFreeCard from './BingoFreeCard';
import BingoComplexCard from './BingoComplexCard';
import './BingoCard.css';

const BingoCard = ({ index, incomingQuestion, onBlur }) => {
  return (
    <div className="bingo-card">
      {
        incomingQuestion.questionType === 'default' &&
        <BingoDefaultCard
          index={index}
          incomingQuestion={incomingQuestion}
          onBlur={onBlur} />
      }
      {
        incomingQuestion.questionType === 'free' &&
        <BingoFreeCard
        incomingQuestion={incomingQuestion}
        />
      }
      {
        incomingQuestion.questionType === 'open-ended-question' &&
        <BingoComplexCard
          index={index}
          incomingQuestion={incomingQuestion}
          onBlur={onBlur} />
      }
    </div>
  );
}

export default BingoCard;