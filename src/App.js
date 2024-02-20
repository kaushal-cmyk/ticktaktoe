import logo from './logo.svg';
import './App.css';
import { First } from './Learn-Component/First';
import { Events } from './Learn-Component/Events';
import Count from './Learn-Component/Count';
import Square from './tictac/Board';
import Board from './tictac/Board';
import Game from './tictac/Game';

function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* <First></First> */}
      {/* <Events></Events> */}
      {/* <Count></Count> */}
      {/* <Count></Count> */}
      {/* <Square></Square> */}

      {/* main playing board */}
      {/* <Board></Board> */}

      <Game></Game>

    </div>
  );
}

export default App;
