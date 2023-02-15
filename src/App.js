import './App.css';
import {
  controls,
  difficulty,
  games,
  mode,
  size,
} from './common/fixtures';
import Menu from './menu/View.jsx';

function App() {
  return (
    <>
      {/* <Toogle /> */}
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
      />
    </>
  );
}

export default App;
