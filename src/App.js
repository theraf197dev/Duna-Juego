import './App.css';
import fixtures from './common/fixtures';
import Menu from './pages/menu/View.jsx';

function App() {
  return (
    <>
      <span>
          <h1>{fixtures.texts.gameName}</h1>
          <h2>{fixtures.texts.gameDescription}</h2>
      </span>
      <Menu
        {...fixtures}
      />
    </>
  );
}

export default App;
