import React from "react";
import { weatherTranslations } from "../../utils/weatherTranslations";
import "./CurrentWeather.css"
import { convertTemperature } from "../../utils/temperature";

const CurrentWeather = ({ weather, unit, setUnit }) => {
  if (!weather) return null;

  const weatherMain = weather.weather[0].main;
  const translated = weatherTranslations[weatherMain] || weatherMain;
  
  const convertTemp = (temp) =>
  unit === "C" ? temp : (temp * 9) / 5 + 32;

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="location">
          <i className="pi pi-map-marker"></i>
          <span>{weather.name}</span>
        </div>

        <div className="temperature-toggle">
         <span
            className={unit === "F" ? "active" : ""}
            onClick={() => setUnit("F")}
          >
            F
          </span>

          <span
            className={unit === "C" ? "active" : ""}
            onClick={() => setUnit("C")}
          >
            C
          </span>
        </div>
      </div>

      <div className="weather-info">
        <h2>{translated}</h2>
        <span>Agora</span>
      </div>

      <h1 className="temperature">
     {Math.round(convertTemperature(weather.main.temp, unit))}°
      </h1>
        <div className="temperature-range">
          <span>Min: {Math.round(convertTemperature(weather.main.temp_min, unit))}°</span>
          <span>Max: {Math.round(convertTemperature(weather.main.temp_max, unit))}°</span>
        </div>
    </div>
  );
};

export default CurrentWeather;