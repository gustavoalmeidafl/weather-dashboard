import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import Chart from '../components/Chart/Chart';
import { getWeatherByCity } from "../services/api";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherByCity("Fortaleza");
      setWeather(data);
    };

    fetchData();
  }, []);

  return (
    <div className="charts">
      <Chart weather={weather} />
    </div>
  )
}

export default Dashboard;