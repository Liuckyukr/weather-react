import React, { useState } from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";

export default function Weather(props) {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
    
  function showTemperature (response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      <img
        src={response.data.condition.icon_url}
        alt={response.data.condition.icon}
        className="weather-icon"
      />
    );
  }

    if (temperature) {
    return (
      <div className="container">
        <div className="City-info">
          
          <div className="InfoCity">
            <div className="NameCity">
              <div className="City">{props.city}</div>
            </div>
            <div>20 may 2023</div>
          </div>
        </div>
  
        <div className="row Weather-now">
          <div className="col-6">
            <p>
            <span>{icon}</span>
            {Math.round(temperature)} °C</p>
          </div>
          <div className="col-6">
            <div>Description: {description}</div>
            <div>Humidity: {humidity} %</div>
            <div>Wind: {Math.round(wind)} m/s</div>
          </div>
        </div>
  
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
  
        <div className="Weather-forecast">
          <div className="row">
            <div className="col-3 W-forecast">
              <img src="" className="Icon" alt="WeatherIcon" width="" />
              😎
            </div>
            <div className="col-3 W-forecast">
              <span className="TempMin">14°C/</span>
              <span className="TempMax">25°C</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Day">Fri</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Feels">20°C</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 W-forecast">
              <img src="" class="Icon" alt="WeatherIcon" width="" />
              😎
            </div>
            <div className="col-3 W-forecast">
              <span className="TempMin">14°C/</span>
              <span className="TempMax">25°C</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Day">Fri</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Feels">20°C</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 W-forecast">
              <img src="" class="Icon" alt="WeatherIcon" width="" />
              😎
            </div>
            <div className="col-3 W-forecast">
              <span className="TempMin">14°C/</span>
              <span className="TempMax">25°C</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Day">Fri</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Feels">20°C</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 W-forecast">
              <img src="" class="Icon" alt="WeatherIcon" width="" />
              😎
            </div>
            <div className="col-3 W-forecast">
              <span className="TempMin">14°C/</span>
              <span className="TempMax">25°C</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Day">Fri</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Feels">20°C</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 W-forecast">
              <img src="" class="Icon" alt="WeatherIcon" width="" />
              😎
            </div>
            <div className="col-3 W-forecast">
              <span className="TempMin">14°C/</span>
              <span className="TempMax">25°C</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="day">Fri</span>
            </div>
            <div className="col-3 W-forecast">
              <span className="Feels">20°C</span>
            </div>
          </div>
        </div>
      </div>
    );
   } else {
   if (!props.city) return;
   let apiKey = "e2ca61fe673t0d6bod3bada8d40a7305";
   let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
   axios.get(url).then(showTemperature);
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
  

