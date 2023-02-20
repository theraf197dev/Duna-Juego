import './App.css';
import fixtures from './common/fixtures';
import Menu from './pages/menu/View.jsx';

function App() {
  return (
    <>
      <span>
          <h1>DUNA JUEGO</h1>
          <h2>Atrapa la pizzita</h2>
      </span>
      <Menu
        {...fixtures}
      />
    </>
  );
}

export default App;
