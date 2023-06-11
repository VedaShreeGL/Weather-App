import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';


const WeatherSearch = ({ setWeatherData, setError }) => {
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    try {
    const apiKey = '1cbe6f7f73e54c5682a82959231106'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    

      const response = await axios.get(apiUrl);
      const { temp_c, condition, humidity, wind_kph } = response.data.current;

      const weatherData = {
        temperature: temp_c,
        weatherConditions: condition.text,
        humidity,
        windSpeed: wind_kph,
      };

      setWeatherData(weatherData);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Error fetching weather data. Please try again.');
    }
  };
    // const styles={
    //     box:{
            
    //     },
    //     search:{
    //         padding:"50px",
    //         color:"red",
    //     }
    // style={styles.search}
    // }
  return (
    <div className="weather-search" >
      <input id="search"type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
      <button onClick={handleSearch} >Search</button>
    </div>
  );
};

export default WeatherSearch;
