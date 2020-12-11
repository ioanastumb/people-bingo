import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { toLowercaseFirstLetter } from '../logic/helpers';
import './BingoCard.css';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '1em',
  },
  bingoInput: {
    width: '50%'
  },
  freeContent: {
    fontSize: '2.5em',
    paddingTop: 40
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
  const id = "answer-" + index;

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Find someone who...
      </Typography>
      <br />

      <span>{question.questionText}</span>
      <br />

      <TextField id={id} defaultValue={question.answer} onBlur={event => onBlur(index, event.target.value, null, 'answer')} />
    </>
  )
}

const BingoFreeCard = ({ question }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.freeContent} gutterBottom>
      {question.questionText}
    </Typography>
  )
}

const BingoComplexCard = ({ index, question, onBlur }) => {
  const classes = useStyles();
  const answerId = "answer-" + index;
  const reasonId = "reason-" + index;

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Question time!
      </Typography>

      <TextField id={answerId} size="small" className={classes.bingoInput}
        placeholder="who?" defaultValue={question.answer} onBlur={event => onBlur(index, event.target.value, null, 'answer')} />
      <span style={{ fontSize: 24 }}>,</span>
      <br />

      <span>{toLowercaseFirstLetter(question.questionText)}</span>
      <br />

      <TextField id={reasonId} defaultValue={question.answer} onBlur={event => onBlur(index, null, event.target.value, 'reason')} />
    </>
  )
}

export default BingoCard;