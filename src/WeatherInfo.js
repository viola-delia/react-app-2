import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return  (
    <div className="WeatherInfo">
    
    <div className='mainCity'>
                <h1>{props.data.city}</h1>
                
                <h2> 
                  <div><span className='mainCityTemperature'><img src= {props.data.iconUrl} alt={props.data.description} className='image'/></span></div>
                  <WeatherTemperature celsius={props.data.temperature}/>
              </h2>



                </div>
                <p><FormattedDate date={props.data.date}/> {props.data.description}</p>
                <p>Humidity: <span className='humidityPercentage'>{props.data.humidity}%</span>, Wind: <span className='wind'>{props.data.wind} km/h</span></p>
                <p>
                <div class="weather-container">
  <div class="weather-day">
    <div>Sat</div>
    <div class="weather-emoji">🌤️</div>
    <div class="weather-temperature">16° 12°</div>
  </div>
  <div class="weather-day">
    <div>Sun</div>
    <div class="weather-emoji">🌤️</div>
    <div class="weather-temperature">16° 12°</div>
  </div>
  <div class="weather-day">
    <div>Mon</div>
    <div class="weather-emoji">🌤️</div>
    <div class="weather-temperature">16° 12°</div>
  </div>
  <div class="weather-day">
    <div>Tue</div>
    <div class="weather-emoji">🌤️</div>
    <div class="weather-temperature">16° 12°</div>
  </div>
  <div class="weather-day">
    <div>Wed</div>
    <div class="weather-emoji">🌤️</div>
    <div class="weather-temperature">16° 12°</div>
  </div>
  <div class="weather-day">
    <div>Thu</div>
    <div class="weather-emoji">🌤️</div>
    <div class="weather-temperature">16° 12°</div>
  </div>
</div>
                </p></div>
    );
}
