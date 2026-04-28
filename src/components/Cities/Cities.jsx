import React from "react";


const Cities = ({ citiesWeather }) => {
  if (!citiesWeather || citiesWeather.length === 0) return null;

  return (
    <div className="cities">
      <h2>Cidades pesquisadas</h2>

      {citiesWeather.map((city, index) => (
        <div key={index} className="city-card">
          <span className="temperature">
            {Math.round(city.main.temp)}°
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