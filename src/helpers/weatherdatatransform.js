function formatDate(data) {
  //convert to just a single day name
  let dtFormat = new Intl.DateTimeFormat('en-US', {
    weekday: 'short'
  });
  const date = new Date(data * 1000);
  return dtFormat.format(date);
}

function restructureData(data) {
  const dayForecast = {
    day: formatDate(data.dt), 
    forecast: data.weather[0].description, 
    temp_min: kelvinToCelcius(data.temp.min), 
    temp_max: kelvinToCelcius(data.temp.max),
    icon: data.weather[0].icon
  };
  return dayForecast;
}

function kelvinToCelcius(temp) {
  return Math.floor(temp - 273.15);
} 

module.exports = {formatDate, restructureData};