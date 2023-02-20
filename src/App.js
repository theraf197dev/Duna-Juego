import './App.css';
import {
  controls,
  difficulty,
  games,
  mode,
  size,
  time,
} from './common/fixtures';
import Menu from './pages/menu/View.jsx';

function App() {
  return (
    <>
      <span>
          <h1>DUNA JUEGO</h1>
          <h2>Atrapa la pizzita</h2>
      </span>
      <Menu
        controls={controls}
        difficulty={difficulty}
        games={games}
        mode={mode}
        size={size}
        time={time}
      />
    </>
  );
}

export default App;
