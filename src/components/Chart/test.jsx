const HighlightCard = ({ title, value, unit }) => {
  return (
    <div className="highlight-card">
      <h3>{title}</h3>
      <div className="value">{value}{unit}</div>
    </div>
  )
}

export default HighlightCard
