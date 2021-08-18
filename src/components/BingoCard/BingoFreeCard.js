import Typography from '@material-ui/core/Typography';
import useStyles from './styling';

const BingoFreeCard = ({ question }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.freeContent} gutterBottom>
            {question.questionText}
        </Typography>
    )
}

export default BingoFreeCard;