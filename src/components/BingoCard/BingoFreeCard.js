import Typography from '@material-ui/core/Typography';
import useStyles from './styling';

const BingoFreeCard = ({ incomingQuestion }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.freeContent} gutterBottom>
            {incomingQuestion.questionText}
        </Typography>
    )
}

export default BingoFreeCard;