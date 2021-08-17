import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styling';

const BingoDefaultCard = ({ index, incomingQuestion, onBlur }) => {
    const classes = useStyles();
    const id = "answer-" + index;

    return (
        <>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Find someone who...
            </Typography>
            <br />

            <span>{incomingQuestion.questionText}</span>
            <br />

            <TextField id={id} defaultValue={incomingQuestion.answer} onBlur={event => onBlur(index, event.target.value, null, 'answer')} />
        </>
    )
}

export default BingoDefaultCard;