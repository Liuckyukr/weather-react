import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay (props) {
    
    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function Wind() {
        let wind = Math.round(props.data.wind.speed);
        return `${wind} m/s`;
    }

    function day() {
        let date = new Date(props.data.time*1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
     
    return (
        <div className="row">
            <div className="col-2 W-forecast">
            <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.icon} 
            className="Icon-forecast" width="60px" />
        </div>
        <div className="col-3 W-forecast">
            <span className="TempMin">{minTemperature()} / </span>
            <span className="TempMax">{maxTemperature()}</span>
        </div>
        <div className="col-2 W-forecast">
            <span className="Day">{day()}</span>
        </div>
        <div className="col-2 W-forecast">
            <span className="Humidity">{props.data.temperature.humidity}%</span>
        </div>
        <div className="col-2 W-forecast">
            <span className="Wind">{Wind()} </span>
        </div>
    </div>
    );
}