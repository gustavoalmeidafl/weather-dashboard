import React from "react";
import HourCard from "../Hourd_Card/Hour_Card";
import { weatherTranslations } from "../../utils/weatherTranslations";

const ForecastSection = ({forecast}) => {
  if (!forecast) return null;
 const tomorrow = forecast?.list?.[8];
const nextHours = forecast?.list?.slice(0, 8) || [];
  return (
        <div className="weekly-forecast">
          <h2>Hoje</h2>

          <div className="hour-list">
            {nextHours.map((item, index) => {
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
              <span>
                {tomorrow
                  ? weatherTranslations[tomorrow.weather[0].main]
                  : "--"}
              </span>
            </div>

            {tomorrow && (
              <div className="tomorrow-right">
                <span className="tomorrow-temp">
                  {Math.round(tomorrow.main.temp)}°
                </span>

                <img
                  src={`https://openweathermap.org/img/wn/${tomorrow.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
            )}
          </div>
        </div>
  )
}

export default ForecastSection
