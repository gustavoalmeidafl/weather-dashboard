import React from 'react';
import './Chart.css';

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Highlights from "../Highlights/Highlights";
import Cities from "../Cities/Cities";
import ForecastSection from "../ForecastSection/ForecastSection";


const Chart = ({ weather, forecast, citiesWeather, unit, setUnit}) => {
  if (!weather) return <p>Carregando...</p>;
  return (
    <div className="dashboard">

      <div className="dashboard-left">

      <CurrentWeather 
      weather={weather}
      unit={unit}
      setUnit={setUnit}
      />

     <ForecastSection forecast={forecast} unit={unit} />

      </div>

      <div className="dashboard-right">
        
        <Highlights weather={weather} />

        <Cities
          citiesWeather={citiesWeather}
          unit={unit}
        />
        
      </div>

    </div>
  );
};

export default Chart;