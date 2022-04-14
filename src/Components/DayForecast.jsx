import React from 'react'

function DayForecast(props) {
  console.log("prop icon: ", props.icon);
  return (
    <div style={{'width': '150px'}}>
      <h3>{props.day}</h3>
      <img src={require(`../../public/weatherIcons/${props.icon}.png`)}/>
      <div style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
        <span>{props.temp_max}°</span>
        <span>{props.temp_min}°</span>
      </div>
    </div>
  )
}

export default DayForecast;