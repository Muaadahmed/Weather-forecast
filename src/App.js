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
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=75.6972&lon=45.4215&exclude=alerts,minutely,hourly&appid=${process.env.React_App_APPID}`)
    .then(res => console.log("res onecall: ", res));
      // .then(res => setWeatherData(res.data.daily.map(obj => restructureData(obj))));
        // formatDate(res.data););
  },[]);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      {/* <WeatherComponent fiveDayForecast={weatherData}/> */}
    </div>
  );
}

export default App;
