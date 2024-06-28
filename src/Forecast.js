import React, { useState } from "react";
import axios from "axios";
import './Forecast.css';


export default function Forecast(props) {
  
const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    iconUrl: "https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png",
  city: response.data.name,
  date: "Friday 07:00",
});
    
  }

  if (weatherData.ready) {
      return (
        <div className='content'>
            
            <form>
                <div className='formElements'>
                <input type='text' className='searchBar' placeholder="Enter a City"></input>
                <input type='submit' value='Search' className='searchButton'></input>
                </div>
                <br />
                <div className='mainCity'>
                <h1>{weatherData.city}</h1>
                <h2> <span className='mainCityTemperature'><img src= {weatherData.iconUrl} alt={weatherData.description} className='image'/>{Math.round(weatherData.temperature)}</span>° C</h2>
                </div>
                <p>{weatherData.date}, {weatherData.description}</p>
                <p>Humidity: <span className='humidityPercentage'>{weatherData.humidity}%</span>, Wind: <span className='wind'>{weatherData.wind} km/h</span></p>
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
  } else {
 let apiKey = "ddfee6c6ea2669b2c756f5fc30a1fd5b";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading";
  }
  
  

   
}