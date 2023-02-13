import './App.css';
import {
  controls,
  difficulty,
  size,
  mode,
 } from './common/fixtures';
import Menu from './menu/Model';

function App() {
  return (
    <Menu size={size} controls={controls} difficulty={difficulty} mode={mode} />
  );
}

export default App;
