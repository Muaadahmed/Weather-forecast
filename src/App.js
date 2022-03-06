import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import WeatherComponent from './Components/WeatherComponent';
import {formatDate, restructureData} from './helpers/weatherdatatransform';

function App() {
  // Use helpers to transform data into just whats needed
  // Pass clean data to another component use that component to add the icon, day, and temp
  const [weatherData, setWeatherData] = useState([]);
  useEffect(()=> {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=6094817&cnt=5&appid=${process.env.React_App_APPID}`)
      .then(res => {
        res.data.list.map((obj) => {
          console.log("days: ", restructureData(obj));
        });
      });
        // formatDate(res.data););
  },[]);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default App;
