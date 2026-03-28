import React from 'react'
import './Chart.css'

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

      <div className="converter"><span>F</span><span>C</span></div>
      </div>

          <div className="text_weather">
          <h2>Clima</h2>
          <span>Agora</span>
          </div>
          <h1>24</h1>  
         <span>Sensação termica de</span>
          div.high_low<span>Mais baixa:</span> <span>Mais alta:</span>
      </div>

        <div className="chart_week"></div>
  </div>
        <div className="group_highlight_cities">
          <div className="highlight"></div>
          <div className="cities"></div>
        </div>

        
    </div>
  )
}

export default Chart
