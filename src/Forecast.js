import React from "react";
import forecast from './Forecast.css';


export default function Forecast() {
    return (
        <div className='content'>
            
            <form>
                <div className='formElements'>
                <input type='text' className='searchBar' placeholder="Enter a City"></input>
                <input type='submit' value='Search' className='searchButton'></input>
                </div>
                <br />
                <div className='mainCity'>
                <h1>San Francisco</h1>
                <h2> <span className='mainCityTemperature'>☁️11</span>° C</h2>
                </div>
                <p>Friday 16:17, overcast clouds</p>
                <p>Humidity: <span className='humidityPercentage'>90%</span>, Wind: <span className='wind'>7.15km/h</span></p>
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
                </p>
            </form>
            <hr/>
                <footer>This project was coded by Viola D'Elia and is open-sourced on <a href='https://github.com/viola-delia/weather-react' target='_blank noreferrer'>GitHub</a> and hosted on Netlify</footer>

        </div>
   
   );
  

   
}