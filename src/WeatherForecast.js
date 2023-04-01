import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
   const [loaded, setLoaded] = useState(false);
   const [forecast, setForecast] = useState(null);

   useEffect(() => {
    setLoaded(false);
   }, [props.coordinates]);

   function handleResponse (response) {
    setForecast(response.data.daily);
    setLoaded(true);
   }

   if (loaded) {
    return (
    <div className="Weather-forecast">
        {forecast.map(function (dailyForecast, index) {
            if (index < 7) {
                return (
                    <div key={index}>
                       <WeatherForecastDay data={dailyForecast} />
                    </div>
                );
            }
        })}    
    </div>
    );
    } else {  
       let apiKey = "e2ca61fe673t0d6bod3bada8d40a7305";
       let longitude = props.coordinates.longitude;
       let latitude = props.coordinates.latitude;
       let urlApi = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
   
       axios.get(urlApi).then(handleResponse);
       return null;  
   }
}