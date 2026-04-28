import React from 'react';
import './Chart.css';
import HighlightCard from '../HighlightCard/HighlightCard';
import { weatherTranslations } from "../../utils/weatherTranslations.js";
import HourCard from '../Hourd_Card/Hour_Card.jsx';
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Highlights from "../Highlights/Highlights";
import Cities from "../Cities/Cities";
import ForecastSection from "../ForecastSection/ForecastSection";

const Chart = ({ weather, forecast, citiesWeather }) => {
  if (!weather) return <p>Carregando...</p>;
  const tomorrow = forecast?.list?.[8];
  const nextHours = forecast?.list?.slice(0, 8) || [];

  return (
    <div className="dashboard">

      {/* LEFT */}
      <div className="dashboard-left">

      <CurrentWeather weather={weather} />

      <ForecastSection forecast={forecast} />

      </div>

      {/* RIGHT */}
      <div className="dashboard-right">
        
        <Highlights weather={weather} />

        <Cities citiesWeather={citiesWeather}/>
        
      </div>

    </div>
  );
};

export default Chart;