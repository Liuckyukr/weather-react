import React from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";

export default function Weather (props) {
    function showTemperature (response) {
    alert(`It is ${response.data.temperature.current} in ${response.data.city}`)
    } 
    let apiKey = "e2ca61fe673t0d6bod3bada8d40a7305";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
    return (
    <div>
    <h2>Hello from Weather</h2>
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