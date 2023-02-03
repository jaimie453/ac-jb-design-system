import { Button } from './components/button/Button';
import './app.css';

function App() {
  return (
    <div className="App">
      <Button label="Button component" onClick={handleClick} />

      {/* This button won't inherit the styling from the Button component above, 
        since the component is styled using a .module.scss file*/}
      <button>Button tag</button>
    </div>
  );
}

function handleClick() {
  alert('hello');
}

export default App;
