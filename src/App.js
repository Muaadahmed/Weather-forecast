import './App.css';
import {useEffect} from 'react';
import axios from 'axios';

function App() {
  // Use helpers to transform data into just whats needed
  // Pass clean data to another component use that component to add the icon, day, and temp
  useEffect(()=> {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=75.6972&lon=45.4215&appid={APPID}`)
      .then(res => console.log("weather forecast data", res));
  },[]);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default App;
