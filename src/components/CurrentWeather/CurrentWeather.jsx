import React from "react";
import { weatherTranslations } from "../../utils/weatherTranslations";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const weatherMain = weather.weather[0].main;
  const translated = weatherTranslations[weatherMain] || weatherMain;

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="location">
          <i className="pi pi-map-marker"></i>
          <span>{weather.name}</span>
        </div>

        <div className="temperature-toggle">
          <span>F</span>
          <span>C</span>
        </div>
      </div>

      <div className="weather-info">
        <h2>{translated}</h2>
        <span>Agora</span>
      </div>

      <h1 className="temperature">
        {Math.round(weather.main.temp)}°
      </h1>

      <div className="temperature-range">
        <span>Min: {Math.round(weather.main.temp_min)}°</span>
        <span>Max: {Math.round(weather.main.temp_max)}°</span>
      </div>
    </div>
  );
};

export default CurrentWeather;