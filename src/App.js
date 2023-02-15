import './App.css';
import {
  controls,
  difficulty,
  size,
  mode,
  games,
 } from './common/fixtures';
import Menu from './menu/Model';

function App() {
  return (
    <>
      {/* <Toogle /> */}
      <span>
          <h1>DUNA JUEGO</h1>
          <h2>Atrapa la pizzita</h2>
      </span>
      <Menu size={size} controls={controls} difficulty={difficulty} mode={mode} games={games} />
    </>
  );
}

export default App;
