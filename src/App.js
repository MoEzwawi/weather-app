import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import WeatherDetails from './components/WeatherDetails';
import MyFooter from './components/MyFooter';
import { useState } from 'react';

const App = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState({})
  return (
    <div className="App">
      <MyNav setCurrentCoordinates={setCurrentCoordinates} />
      <Welcome />
      <WeatherDetails currentCoordinates={currentCoordinates} />
      <MyFooter />
    </div>
  );
}

export default App;
