import { useEffect, useState } from "react";
import Chart from "../components/Chart/Chart";
import { getWeatherByCity, getForecastByCity } from "../services/api";
import './Dashboard.css' 

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [city, setCity] = useState("Fortaleza");
  const [input, setInput] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeatherByCity(city);
        const forecastData = await getForecastByCity(city);

        if (weatherData.cod !== 200) {
          setError("Não encontramos essa cidade.");
          return; 
        }

        setWeather(weatherData);
        setForecast(forecastData);
        setError(null);

      } catch (err) {
        setError("Erro ao buscar dados.");
        return;
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setCity(input.trim());
    setInput("");
  };

  return (
    <div className="dashboard-page">

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Digite uma cidade"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`search-input ${error ? "error" : ""}`}
        />
        <button type="submit">Buscar</button>


      </form>

            {error && (
        <div className="error-box">
          <span>{error}</span>
          <button onClick={() => setError(null)}>Ok</button>
        </div>
      )}

      {weather && (
       <Chart weather={weather} forecast={forecast} />
      )}

    </div>
  );
};

export default Dashboard;