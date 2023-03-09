import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  generalLayout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  },
  introLayout: {
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1200,
    }
  },
  gameLayout: {
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: props => (1200 * props.gridSize) / 5,
    }
  },
  bingoContent: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(1),
    margin: theme.spacing(2, 0, 2),
    fontSize: '2.5em'
  },
  doubleBingoContent: {
    position: "fixed",
    bottom: theme.spacing(8),
    left: theme.spacing(1),
    margin: theme.spacing(2, 0, 2),
    fontSize: '1.6em'
  },
  resetButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(1),
    margin: theme.spacing(2, 0, 2)
  },
  bold: {
    fontWeight: 'bold'
  },
  paper: {
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  card: {
    height: 160
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: props => -props.spaceBetweenItems * 0.5
  },
  item: {
    display: 'block',
    flex: 'none',
    width: props => 100 / 3 + '%',
    boxSizing: 'border-box',
    padding: props => props.spaceBetweenItems * 0.5
  },
  footer: {
    margin: theme.spacing(0, 0, 3)
  },
  instructions: {
    display: 'block',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30
  },
  configSizeCard: {
    height: 80
  },
  configSizeDisplay: {
    display: 'block',
    flex: 'none',
    width: 100,
    boxSizing: 'border-box',
    padding: props => props.spaceBetweenItems * 0.5
  },
  questionsScroll: {
    overflowY: 'scroll',
    height: 160 * 3
  }
}));

export default useStyles;