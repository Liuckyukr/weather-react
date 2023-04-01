import React, { useState } from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse (response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time*1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: 
          <img
          src={response.data.condition.icon_url}
          alt={response.data.condition.icon}
          className="weather-icon"
        />
    });
  }
  
  function search() {
   let apiKey = "e2ca61fe673t0d6bod3bada8d40a7305";
   let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(url).then(handleResponse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange (event){
     setCity(event.target.value);
  }

    if (weatherData.ready) {
    return (
      <div className="container">
        
      <form onSubmit={handleSumbit}>
        <input type="search" placeholder="Enter the city" className="chooseCity" onChange={handleCityChange} />
        <input type="submit" value="Search" className="submit" />
      </form>
      <WeatherInfo data={weatherData} />
  
        <div className="row Weather-day">
          <div className="col">
            <div className="Time-day">08:00</div>
            <div role="img" className="Descript-img-day">😎</div>
            <div className="Temperature-day">15°C</div>
          </div>
          <div className="col">
            <div className="Time-day">12:00</div>
            <div role="img" className="Descript-img-day">😎</div>
            <div className="Temperature-day">25°C</div>
          </div>
          <div className="col">
            <div className="Time-day">16:00</div>
            <div role="img" className="Descript-img-day">😎</div>
            <div className="Temperature-day">26°C</div>
          </div>
          <div className="col">
            <div className="Time-day">20:00</div>
            <div role="img" className="Descript-img-day">😎</div>
            <div className="Temperature-day">20°C</div>
          </div>
          <div className="col">
            <div className="Time-day">00:00</div>
            <div role="img" className="Descript-img-day">🌑</div>
            <div className="Temperature-day">16°C</div>
          </div>
        </div>

        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
   } else {
    search();
    return (
    <div>
          <Dna 
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />
    </div>
    );
  }
}
  

