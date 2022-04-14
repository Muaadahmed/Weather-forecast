import React from "react";
import DayForecast from "./DayForecast";
export default function WeatherComponent(props) {
  const day = props.fiveDayForecast.map( (day, index) => {
    return index >= 5 ? null : <DayForecast key={index + 1} {...day}/>;
  });
  return(
    <div style={{'display': 'flex', 'justifyContent': 'center'}}>
      {day}
    </div>
  );
}