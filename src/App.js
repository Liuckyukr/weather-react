import React from "react";
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather defaultCity="Kyiv"/>
      <footer className="Info-end">
        <p>
          <a href="https://weather-react-from-ll.netlify.app/" target="_blank" rel="noreferrer">Created</a> Liudmyla Leroy <a href="https://github.com/Liuckyukr" target="_blank" rel="noreferrer">(LiuckyUKR)</a> with React <span role="img">⚛️</span>
        </p>
      </footer> 
    </div>
  );
}

export default App;
