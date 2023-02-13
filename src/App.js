import './App.css';
import Game from './game/Model';
import { controls, size } from './common/fixtures';

function App() {
  return (
    <Game size={size} controls={controls} />
  );
}

export default App;
