const HourCard = ({ hour, temp, condition }) => {
  const icon = getWeatherIcon(condition)

  return (
    <div className="hour-card">
      <span>{hour}</span>
      <i className={icon}></i>
      <span>{temp}°</span>
    </div>
  )
}

export default HourCard
