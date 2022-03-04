import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';

function App() {
  // Use a helpers to transform data into just whats needed
  // Pass clean data to another component and create 
  useEffect(()=> {
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat=75.6972&lon=45.4215&appid=c876465f1aa8174a67435e8f65ead6ce')
      .then(res => console.log("weather forecast data", res));
  },[]);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default App;
