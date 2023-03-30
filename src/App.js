import React from "react";
import './App.css';
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <SearchEngine />
      <div className="Info-end">
        <p>
          <a href="https://weather-react-from-ll.netlify.app/" target="_blank" rel="noreferrer">Created</a> Liudmyla Leroy <a href="https://github.com/Liuckyukr" target="_blank" rel="noreferrer">(LiuckyUKR)</a> with React <span role="img">⚛️</span>
        </p>
      </div>
      </div>
    </div>
  );
}

export default App;
