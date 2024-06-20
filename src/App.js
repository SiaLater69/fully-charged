import './App.css';
import ProgressBar from './components/ProgressBar';
import Porsche from './Pages/Porsche/Porsche';
import Jeep from './Pages/Jeep/Jeep';
import Tesla from './Pages/Tesla/Tesla';
import Hyundai from './Pages/Hyundai/Hyundai';

function App() {
  return (
    <div className="App">
    <ProgressBar/>
    <Porsche/>
    <Tesla/>
    <Hyundai/>
    <Jeep/>
    </div>
  );
}

export default App;
