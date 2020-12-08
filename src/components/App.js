import './App.css';
import { Helmet } from 'react-helmet';
import BingoGame from './BingoGame';
import data from '../data.json';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bingo bango bongo</title>
      </Helmet>

      <BingoGame
        data={data}
      />
    </>
  );
}

export default App;
