import React, { useState } from "react";
import axios from "axios";
import './Forecast.css';
import WeatherInfo from './WeatherInfo';


export default function Forecast(props) {
  
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  city: response.data.name,
  date: new Date(response.data.dt * 1000),
});
    
  }


  function search() {
     const apiKey = "ddfee6c6ea2669b2c756f5fc30a1fd5b";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
setCity(event.target.value);

  }



  if (weatherData.ready) {
      return (
        <div className='content'>
            
            <form onSubmit={handleSubmit}>
                <div className='formElements'>
                <input
              type="text"
              className="searchBar"
              placeholder="Enter a City"
              onChange={handleCityChange}
            ></input>
            <input
              type="submit"
              value="Search"
              className="searchButton"
            ></input>
                </div>
              
                <br />
               
            </form>
            <div><WeatherInfo data={weatherData}/></div>  
            <hr/>
                <footer>This project was coded by Viola D'Elia and is open-sourced on <a href='https://github.com/viola-delia/weather-react' target='_blank noreferrer'>GitHub</a> and hosted on <a href='https://react-forecast-application.netlify.app/'  target='_blank noreferrer'>Netlify</a></footer>

        </div>
   
   );
  } else {
search();
return "Loading";
  }
  
}