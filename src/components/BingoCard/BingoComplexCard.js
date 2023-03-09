import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styling';
import { toLowercaseFirstLetter } from '../../logic/helpers';

const BingoComplexCard = ({ index, question, onChange, onBlur, isFromBuilder }) => {
    const classes = useStyles();
    const answerId = "answer-" + index;
    const reasonId = "reason-" + index;

    return (
        <>
            <div className={classes.cardHeader}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Question time!
                </Typography>

                {
                    isFromBuilder &&
                    <div className={classes.cardHeaderButton}>
                        <Button size="small" variant="outlined" disableElevation>Add me!</Button>
                    </div>
                }
            </div>

            <TextField id={answerId} size="small" className={classes.bingoInput} autoComplete="off"
                placeholder="who?" value={question.answer}
                onChange={event => onChange(index, event.target.value, '', 'answer')}
                onBlur={event => onBlur(index, event.target.value, '', 'answer')} />
            <span style={{ fontSize: 24 }}>,</span>
            <br />

            <span>{toLowercaseFirstLetter(question.questionText)}</span>
            <br />

            <TextField id={reasonId} value={question.reason} autoComplete="off"
                onChange={event => onChange(index, '', event.target.value, 'reason')}
                onBlur={event => onBlur(index, '', event.target.value, 'reason')} />
        </>
    )
}

export default BingoComplexCard;