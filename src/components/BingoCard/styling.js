import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '1em',
    },
    bingoInput: {
        width: '50%'
    },
    freeContent: {
        fontSize: '2.5em',
        paddingTop: 10
    },
    cardHeader: {
        display: "flex"
    },
    cardHeaderButton: {
        marginLeft: "auto",
        order: 2
    }
}));

export default useStyles;