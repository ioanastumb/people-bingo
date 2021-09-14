import './App.css';
import { Helmet } from 'react-helmet';
import { Router } from "@reach/router"
import GameWrapper from '../GameWrapper/GameWrapper';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bingo bango bongo</title>
      </Helmet>

      <Router>
        <GameWrapper path="/people-bingo" />
      </Router>
    </>
  );
}

export default App;