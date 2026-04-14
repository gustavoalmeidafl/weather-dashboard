const API_KEY = "122bf9e160b46d63e9c1c2a7a2292940";

export const getWeatherByCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );

  const data = await response.json();
  return data;
};


export const getForecastByCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );

  const data = await response.json();
  return data;
};