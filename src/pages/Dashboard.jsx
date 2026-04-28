import { useEffect, useState } from "react";
import Chart from "../components/Chart/Chart";
import { getWeatherByCity, getForecastByCity } from "../services/api";
import './Dashboard.css';

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [city, setCity] = useState("Fortaleza");
  const [input, setInput] = useState("");

  const [error, setError] = useState(null);

  const [citiesWeather, setCitiesWeather] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeatherByCity(city);

        if (weatherData.cod !== 200) {
          setError("Não encontramos essa cidade.");
          setWeather(null);
          setForecast(null);
          return;
        }

        const forecastData = await getForecastByCity(city);

        setWeather(weatherData);
        setForecast(forecastData);
        setError(null);

      } catch (err) {
        setError("Erro ao buscar dados.");
        setWeather(null);
        setForecast(null);
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const results = await Promise.all(
          cities.map((city) => getWeatherByCity(city))
        );

        const validCities = results.filter(c => c.cod === 200);

        setCitiesWeather(validCities);
      } catch {
      }
    };

    if (cities.length > 0) {
      fetchCities();
    }
  }, [cities]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const cityName = input.trim();

    setCity(cityName);
    setInput("");

    setCities((prev) => {
      if (prev.includes(cityName)) return prev;
      return [cityName, ...prev].slice(0, 5);
    });
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
        <Chart 
          weather={weather} 
          forecast={forecast} 
          citiesWeather={citiesWeather} 
        />
      )}

    </div>
  );
};

export default Dashboard;