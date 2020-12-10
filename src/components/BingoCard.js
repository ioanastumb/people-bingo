import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { toLowercaseFirstLetter } from '../logic/helpers';
import './BingoCard.css';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  bingoInput: {
    width: '50%'
  }
}));

const BingoCard = ({ index, question, onBlur }) => {
  return (
    <div className="bingo-card">
      {
        question.questionType === 'default' &&
        <BingoDefaultCard
          index={index}
          question={question}
          onBlur={onBlur} />
      }
      {
        question.questionType === 'free' &&
        <BingoFreeCard
          question={question}
        />
      }
      {
        question.questionType === 'open-ended-question' &&
        <BingoComplexCard
          index={index}
          question={question}
          onBlur={onBlur} />
      }
    </div>
  );
}

const BingoDefaultCard = ({ index, question, onBlur }) => {
  const classes = useStyles();
  const guessedColor = question.isAnswered ? "red" : "black";
  const id = "answer-" + index;

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Find someone who...
      </Typography>
      <br />
      <span style={{ color: guessedColor }}>{question.questionText}</span>
      <br />
      <TextField id={id} defaultValue={question.answer} onBlur={event => onBlur(index, event.target.value, null)} />
    </>
  )
}

const BingoFreeCard = ({ question }) => {
  const guessedColor = question.isAnswered ? "red" : "black";

  return (
    <Typography gutterBottom>
      <span style={{ color: guessedColor }}>{question.questionText}</span>
    </Typography>
  )
}

const BingoComplexCard = ({ index, question, onBlur }) => {
  const classes = useStyles();
  const guessedColor = question.isAnswered ? "red" : "black";
  const answerId = "answer-" + index;
  const reasonId = "reason-" + index;

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Question time!
      </Typography>
      <TextField id={answerId} size="small" className={classes.bingoInput} placeholder="who" defaultValue={question.answer} onBlur={event => onBlur(index, event.target.value, null)} />
      <span style={{ fontSize: 24 }}>,</span>
      <br />
      <span style={{ color: guessedColor }}>{toLowercaseFirstLetter(question.questionText)}</span>
      <br />
      <TextField id={reasonId} placeholder="what" defaultValue={question.answer} onBlur={event => onBlur(index, null, event.target.value)} />
    </>
  )
}

export default BingoCard;