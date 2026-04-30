import React from "react";
import  "./Cities.css"
import { convertTemperature } from "../../utils/temperature";

const Cities = ({ citiesWeather, unit }) => {
  if (!citiesWeather || citiesWeather.length === 0) return null;

  return (
    <div className="cities">
      <h2>Cidades pesquisadas</h2>

      {citiesWeather.map((city, index) => (
        <div key={index} className="city-card">
          <span className="temperature">
          {Math.round(convertTemperature(city.main.temp, unit))}°
          </span>

          <div>
            <span>{city.name}</span>
            <span>{city.weather[0].main}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cities;