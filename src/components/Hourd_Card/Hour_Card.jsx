import './Hour_Card.css'

const HourCard = ({ hour, temp, icon }) => {
  return (
    <div className="hour-card">
      <span>{hour}</span>

      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="weather icon"
      />

      <span>{temp}°</span>
    </div>
  )
}

export default HourCard