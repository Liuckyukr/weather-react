import React from "react";
import FormatteDate from "./FormatteDate";
import TemperatureUnit from "./TemperatureUnit";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
            <div className="City-info">
              <div className="City">{props.data.city}, {props.data.country}</div>
              <div><FormatteDate date={props.data.date} /></div>
          </div>
  
        <div className="row Weather-now">
          <div className="col-6">
            <p>
            <span>{props.data.icon}</span>
            <TemperatureUnit celsius={props.data.temperature} />
            </p>
          </div>
          <div className="col-6">
            <div className="text-capitalize">Description: {props.data.description}</div>
            <div>Humidity: {props.data.humidity} %</div>
            <div>Wind: {Math.round(props.data.wind)} m/s</div>
          </div>
         </div>
        </div>
    );
}