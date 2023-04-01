import React from "react";
import FormatteDate from "./FormatteDate";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
            <div className="City-info">
          
          <div className="InfoCity">
            <div className="NameCity">
              <div className="City">{props.data.city}</div>
            </div>
            <div><FormatteDate date={props.data.date} /></div>
          </div>
        </div>
  
        <div className="row Weather-now">
          <div className="col-6">
            <p>
            <span>{props.data.icon}</span>
            {Math.round(props.data.temperature)} 
            <span className="unit">°C</span>
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