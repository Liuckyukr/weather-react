import React, { useState } from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function SearchEngine() {
  const [city, setCity] = useState("Kyiv");
  const [searchedCity, setSearchedCity] = useState(null);

  function handleSumbit(event) {
    event.preventDefault();
    setSearchedCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="City-info">
    <form onSubmit={handleSumbit}>
      <input type="search" placeholder="Enter the city" className="chooseCity" onChange={updateCity} />
      <input type="submit" value="Search" className="submit" />
      <Weather city={searchedCity} />
    </form>
    </div>
  );
}
