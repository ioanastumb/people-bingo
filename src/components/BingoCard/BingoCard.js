import React from 'react';
import BingoDefaultCard from './BingoDefaultCard';
import BingoFreeCard from './BingoFreeCard';
import BingoComplexCard from './BingoComplexCard';
import './BingoCard.css';

const BingoCard = ({ index, question, onChange, onBlur, isFromBuilder }) => {
  return (
    <div className="bingo-card">
      {
        question.questionType === 'default' &&
        <BingoDefaultCard
          index={index}
          question={question}
          onChange={onChange}
          onBlur={onBlur}
          isFromBuilder={isFromBuilder} />
      }
      {
        question.questionType === 'free' &&
        <BingoFreeCard
          question={question}
          isFromBuilder={isFromBuilder}
        />
      }
      {
        question.questionType === 'open-ended-question' &&
        <BingoComplexCard
          index={index}
          question={question}
          onChange={onChange}
          onBlur={onBlur}
          isFromBuilder={isFromBuilder} />
      }
    </div>
  );
}

export default BingoCard;