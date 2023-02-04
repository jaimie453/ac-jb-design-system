import { Button } from './components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './app.css';

function App() {
  return (
    <>
      <Button label="Button component" onClick={handleClick} />

      {/* This button won't inherit the styling from the Button component above, 
        since the component is styled using a .module.scss file*/}
      <button>Button tag</button>

      <FontAwesomeIcon icon={faCoffee} />
    </>
  );
}

function handleClick() {
  alert('hello');
}

export default App;
