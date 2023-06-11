import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherSearch from './components/WeatherSearch';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  
  return (
    <>
    <h1>WEATHER APP</h1>
    <div className="app"> 
      <WeatherSearch setWeatherData={setWeatherData} setError={setError} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {error && <p className="error" style={{fontSize:'30px',fontFamily:'Arial, Helvetica, sans-serif'}}>{error}</p>}
    </div>
   </> 
  );

};

export default App;
