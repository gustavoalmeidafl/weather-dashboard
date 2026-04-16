import React from 'react'
import './Chart.css'
import HighlightCard from '../HighlightCard/HighlightCard'
import { weatherTranslations } from "../../utils/weatherTranslations.js";
import HourCard from '../Hourd_Card/Hour_Card.jsx';


const Chart = ({ weather, forecast }) => {
  if (!weather) return <p>Carregando...</p>;

  const weatherMain = weather.weather[0].main;
  const translated = weatherTranslations[weatherMain] || weatherMain;
  const icon = weather?.weather?.[0]?.icon;
  const tomorrow = forecast?.list?.[8]; 
  const nextHours = forecast?.list?.slice(0, 8);

  return (
    <div className="dashboard">

      <div className="dashboard-left">

        <div className="current-weather">
          <div className="weather-header">
            <div className="location">
              <i className='pi pi-map-marker'></i>
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

        <div className="weekly-forecast">
          <h2>Hoje</h2>

                <div className="hour-list">
            {nextHours?.map((item, index) => {
              const hour = item.dt_txt.split(" ")[1].slice(0, 5);
              const temp = Math.round(item.main.temp);
              const icon = item.weather[0].icon;

              return (
                <HourCard
                  key={index}
                  hour={index === 0 ? "Agora" : hour}
                  temp={temp}
                  icon={icon}
                />
              );
            })}
          </div>

          <div className="tomorrow-card">
            <div className="tomorrow-info">
              <span>Amanhã</span>
              <span>{translated}</span>
            </div>

                        {tomorrow && (
                <>
                  <span>{weatherTranslations[tomorrow.weather[0].main]}</span>

                  <span className="tomorrow-temp">
                    {Math.round(tomorrow.main.temp)}°
                  </span>

                  <img 
                    src={`https://openweathermap.org/img/wn/${tomorrow.weather[0].icon}@2x.png`} 
                    alt="weather icon"
                  />
                </>
              )}
          </div>
        </div>

      </div>

      <div className="dashboard-right">

        <div className="highlights">
          <h2>Destaques</h2>

          <div className="highlights-grid">
            <HighlightCard title="Umidade" value={weather.main.humidity} unit="%" />

            <HighlightCard 
              title="Vento" 
              value={(weather.wind.speed * 3.6).toFixed(1)} 
              unit="km/h" 
            />

            <HighlightCard title="Pressão" value={weather.main.pressure} unit="hPa" />

            <HighlightCard 
              title="Sensação" 
              value={Math.round(weather.main.feels_like)} 
              unit="°" 
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Chart