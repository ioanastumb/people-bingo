import React from 'react';
import BingoDefaultCard from './BingoDefaultCard';
import BingoFreeCard from './BingoFreeCard';
import BingoComplexCard from './BingoComplexCard';
import './BingoCard.css';

const BingoCard = ({ index, incomingQuestion, onChange, onBlur }) => {
  return (
    <div className="bingo-card">
      {
        incomingQuestion.questionType === 'default' &&
        <BingoDefaultCard
          index={index}
          incomingQuestion={incomingQuestion}
          onChange={onChange}
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
          onChange={onChange}
          onBlur={onBlur} />
      }
    </div>
  );
}

export default BingoCard;