import React from "react";
import HighlightCard from "../HighlightCard/HighlightCard";

const Highlights = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="highlights">
      <h2>Destaques</h2>

      <div className="highlights-grid">
        <HighlightCard
          title="Umidade"
          value={weather.main.humidity}
          unit="%"
        />

        <HighlightCard
          title="Vento"
          value={(weather.wind.speed * 3.6).toFixed(1)}
          unit="km/h"
        />

        <HighlightCard
          title="Pressão"
          value={weather.main.pressure}
          unit="hPa"
        />

        <HighlightCard
          title="Sensação"
          value={Math.round(weather.main.feels_like)}
          unit="°"
        />
      </div>
    </div>
  );
};

export default Highlights;