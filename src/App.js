import './App.css';
import { ThingsList } from './ThingsList';
import picOne from "./picOne.png";
import picTwo from "./picTwo.png";

function App() {
  return (
    <div className='App'>
      <div className="container">
      <img src={ picTwo } alt="Cloud" width="250px" />
      </div>
      <div className="container">
      <h1>Things To Do</h1>
      </div>
      <ThingsList />
      <div className="container">
      <img src={ picOne } alt="Laptop" width="200px" />
      </div>
    </div>
  );
}

export default App;
