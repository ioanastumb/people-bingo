import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styling';

const BingoFreeCard = ({ question, isFromBuilder }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardHeader}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Don't we all deserve a free win?
                </Typography>

                {
                    isFromBuilder &&
                    <div className={classes.cardHeaderButton}>
                        <Button size="small" variant="outlined" disableElevation>Add me!</Button>
                    </div>
                }
            </div>

            <Typography className={classes.freeContent} gutterBottom>
                {question.questionText}
            </Typography>
        </>
    )
}

export default BingoFreeCard;