function formatDate(data) {
  //convert to just a single day name
  let dtFormat = new Intl.DateTimeFormat('en-US', {
    weekday: 'short'
  });
  return dtFormat.format(data);
}

function restructureData(data) {
  const dayForecast = {
    day: formatDate(data.dt), 
    forecast: data.weather[0].description, 
    temp_min: kelvinToCelcius(data.main.temp_min), 
    temp_max: kelvinToCelcius(data.main.temp_max)
  };
  return dayForecast;
}

function kelvinToCelcius(temp) {
  return Math.floor(temp - 273.15);
} 

module.exports = {formatDate, restructureData};