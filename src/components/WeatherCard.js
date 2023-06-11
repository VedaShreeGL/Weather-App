import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { temperature, weatherConditions, humidity, windSpeed } = weatherData;

  return (
    <div className="weather-card">
      <h2>Weather Conditions: {weatherConditions}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
    </div>
  );
};

export default WeatherCard;
