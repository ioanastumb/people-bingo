import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styling';

const BingoDefaultCard = ({ index, question, onChange, onBlur, isFromBuilder }) => {
    const classes = useStyles();
    const id = "answer-" + index;

    return (
        <>
            <div className={classes.cardHeader}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Find someone who...
                </Typography>

                {
                    isFromBuilder &&
                    <div className={classes.cardHeaderButton}>
                        <Button size="small" variant="outlined" disableElevation>Add me!</Button>
                    </div>
                }
            </div>
            <br />

            <span>{question.questionText}</span>
            <br />

            <TextField id={id} value={question.answer} autoComplete="off"
                onChange={event => onChange && onChange(index, event.target.value, '', 'answer')}
                onBlur={event => onBlur && onBlur(index, event.target.value, '', 'answer')} />
        </>
    )
}

export default BingoDefaultCard;