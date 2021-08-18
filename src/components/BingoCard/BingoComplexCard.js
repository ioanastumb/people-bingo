import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styling';
import { toLowercaseFirstLetter } from '../../logic/helpers';

const BingoComplexCard = ({ index, incomingQuestion, onChange, onBlur }) => {
    const classes = useStyles();
    const answerId = "answer-" + index;
    const reasonId = "reason-" + index;

    return (
        <>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Question time!
            </Typography>

            <TextField id={answerId} size="small" className={classes.bingoInput} autoComplete="off"
                placeholder="who?" value={incomingQuestion.answer}
                onChange={event => onChange(index, event.target.value, '', 'answer')}
                onBlur={event => onBlur(index, event.target.value, '', 'answer')} />
            <span style={{ fontSize: 24 }}>,</span>
            <br />

            <span>{toLowercaseFirstLetter(incomingQuestion.questionText)}</span>
            <br />

            <TextField id={reasonId} value={incomingQuestion.reason} autoComplete="off"
                onChange={event => onChange(index, '', event.target.value, 'reason')}
                onBlur={event => onBlur(index, '', event.target.value, 'reason')} />
        </>
    )
}

export default BingoComplexCard;