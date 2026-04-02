import React from 'react'
import './Chart.css'
import {
  RadialBarChart,
  RadialBar,
  Tooltip
} from "recharts";
import HighlightCard from './test';

const Chart = () => {
  return (
    <div>
      
      <div className="dashboard">

  <div className="left">

    <div className="day">
      <div className="top_row">
        <div className="icon_loc">
          <i className='pi pi-map-marker'></i>
          <span>Localização</span>
        </div>

        <div className="converter">
          <span>F</span>
          <span>C</span>
        </div>
      </div>

      <div className="text_weather">
        <h2>Clima</h2>
        <span>Agora</span>
      </div>

      <h1 className="temp">24°</h1>

      <div className="high_low">
        <span>Min: 20°</span>
        <span>Max: 28°</span>
      </div>
    </div>

    <div className="chart_week">
      <h2>Hoje</h2>

      <div className="day_hours">
        <div className="hour">8h</div>
        <div className="hour">10h</div>
        <div className="hour">12h</div>
        <div className="hour">15h</div>
        <div className="hour active">Agora</div>
      </div>
    </div>

  </div>

  <div className="right">

    <div className="highlight">
      <h2>Destaques</h2>

      <div className="highlight-grid">
        <HighlightCard title="Chuva" value={70} unit="%" />
        <HighlightCard title="Vento" value={15} unit="km/h" />
        <HighlightCard title="Umidade" value={60} unit="%" />
        <HighlightCard title="UV" value={5} />
      </div>
    </div>

    <div className="cities">
      <h2>Cidades</h2>

      <div className="city">
        <span className="temp">20°</span>
        <div>
          <span>Fortaleza</span>
          <span>Ensolarado</span>
        </div>
      </div>

    </div>

  </div>

</div>
    </div>
  );
}

export default Chart
