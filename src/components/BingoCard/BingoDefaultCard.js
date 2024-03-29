import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styling';

const BingoDefaultCard = ({ index, question, onChange, onBlur }) => {
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

            <TextField id={id} value={question.answer} autoComplete="off"
                onChange={event => onChange(index, event.target.value, '', 'answer')}
                onBlur={event => onBlur(index, event.target.value, '', 'answer')} />
        </>
    )
}

export default BingoDefaultCard;