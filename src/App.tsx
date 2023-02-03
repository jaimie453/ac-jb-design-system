import { Button } from './components/button/Button';
import './app.css';

function App() {
  return (
    <div className="App">
      <Button label="Button component" onClick={handleClick} />

      <button>Button tag</button>
    </div>
  );
}

function handleClick() {
  alert('hello');
}

export default App;
