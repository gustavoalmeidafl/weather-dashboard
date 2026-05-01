import { useEffect, useState } from "react";
import Chart from "../components/Chart/Chart";
import { getWeatherByCity, getForecastByCity } from "../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [unit, setUnit] = useState("C");

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [city, setCity] = useState("Fortaleza");
  const [input, setInput] = useState("");

  const [error, setError] = useState(null);

  const [citiesWeather, setCitiesWeather] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
    setCities(savedCities);
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

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
          cities.map((cityName) => getWeatherByCity(cityName))
        );

        const validCities = results.filter(
          (cityData) => cityData.cod === 200
        );

        setCitiesWeather(validCities);

      } catch (err) {
        console.error("Erro ao buscar cidades salvas:", err);
      }
    };

    if (cities.length > 0) {
      fetchCities();
    } else {
      setCitiesWeather([]);
    }
  }, [cities]);

  const handleSearch = async (e) => {
  e.preventDefault();

  if (!input.trim()) return;

  const cityName = input.trim();

  try {
    const weatherData = await getWeatherByCity(cityName);

    if (weatherData.cod !== 200) {
      setError("Não encontramos essa cidade.");
      return;
    }

    setCity(cityName);
    setInput("");
    setError(null);

    setCities((prev) => {
      if (prev.includes(cityName)) return prev;
      return [cityName, ...prev].slice(0, 5);
    });

  } catch (err) {
    setError("Erro ao buscar dados.");
  }
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
          unit={unit}
          setUnit={setUnit}
        />
      )}
    </div>
  );
};

export default Dashboard;