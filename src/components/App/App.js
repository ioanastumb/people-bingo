import './App.css';
import { Helmet } from 'react-helmet';
import BingoGame from '../BingoGame/BingoGame';
import data from '../../data.json';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bingo bango bongo</title>
      </Helmet>

      <BingoGame
        data={data}
        gridSize={5}
      />
    </>
  );
}

export default App;
