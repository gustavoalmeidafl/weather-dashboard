import React from 'react'
import './Chart.css'
import HighlightCard from '../HighlightCard/HighlightCard'
import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/api";



const Chart = ({ weather }) => {

  if (!weather) {
    return <p>Carregando...</p>;
  }

  return (

    <div className="dashboard">

      <div className="dashboard-left">
      <div className="current-weather">
          <div className="weather-header">
            <div className="location">
              <i className='pi pi-map-marker'></i>
              <span>Location</span>
            </div>

            <div className="temperature-toggle">
              <span>F</span>
              <span>C</span>
            </div>
          </div>

          <div className="weather-info">
            <h2>Weather</h2>
            <span>Now</span>
          </div>

          <h1 className="temperature">24°</h1>

          <div className="temperature-range">
            <span>Min: 20°</span>
            <span>Max: 28°</span>
          </div>
        </div>

      
        <div className="weekly-forecast">
          <h2>Today</h2>

          <div className="hour-list">
            <div className="hour-card">8h</div>
            <div className="hour-card">10h</div>
            <div className="hour-card">12h</div>
            <div className="hour-card">15h</div>
            <div className="hour-card active">Now</div>

          </div>

          <div className="tomorrow-card">
            <div className="tomorrow-info">
              <span>Tomorrow</span>
              <span>Storm</span>
            </div>

            <span className="tomorrow-temp">23°</span>
            <img src="" alt="weather icon" className="weather-icon" />
          </div>
        </div>

      </div>

      <div className="dashboard-right">

     
        <div className="highlights">
          <h2>Highlights</h2>

          <div className="highlights-grid">
            <HighlightCard title="Rain" value={70} unit="%" />
            <HighlightCard title="Wind" value={15} unit="km/h" />
            <HighlightCard title="Humidity" value={60} unit="%" />
            <HighlightCard title="UV Index" value={5} />
          </div>
        </div>

        <div className="cities">
          <h2>Cities</h2>

          <div className="city-card">
            <span className="temperature">20°</span>
            <div>
              <span>Fortaleza</span>
              <span>Sunny</span>
            </div>
          </div>

          <div className="city-card">
            <span className="temperature">24°</span>
            <div>
              <span>Pacatuba</span>
              <span>Sunny</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Chart