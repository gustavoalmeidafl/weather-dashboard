import React from 'react'
import './Chart.css'
import {
  RadialBarChart,
  RadialBar,
  Tooltip
} from "recharts";

const Chart = () => {
  return (
    <div>
      
      <div className="group_day_week">
        <div className="day">
          <div className="top_row">
            <div className="icon_loc">
              <i className='pi pi-map-marker'></i>
              <span>Localização</span>
            </div>

            <div className="converter">
              <span>F</span><span>C</span>
            </div>
          </div>

          <div className="text_weather">
            <h2>Clima</h2>
            <span>Agora</span>
          </div>

          <h1>24</h1>

          <div className="high_low">  
            <span>Sensação termica de:</span>
            <span>Mais baixa:</span>
            <span>Mais alta:</span>
          </div>
        </div>

        <div className="chart_week">
          <h2>Hoje/Semana</h2>

          <div className="day_hours">
            <div className="hours"><span>8h</span></div>
            <div className="hours"><span>10h</span></div>
            <div className="hours"><span>12h</span></div>
            <div className="hours"><span>15h</span></div>
            <div className="hours"><span>Agora</span></div>
          </div>

          <div className="tomorrow">
            <span>Tomorrow</span>
            <div className="tomorrow_temp"></div>
            <div><img src="" alt="a" /></div>
          </div>
        </div>
      </div>

   
      <div className="group_highlight_cities">
        <div className="highlight">
          <h2>Destaques</h2>
            <RadialBarChart width={200} height={200} data={[{ name: "UV", value: 70 }]}>
             <RadialBar dataKey="value" />
                <Tooltip />
              </RadialBarChart>
        </div>
        <div className="cities">
          
        </div>
      </div>

    </div>
  );
}

export default Chart
