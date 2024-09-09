import { useState } from "react";
import "./App.css";
import { API_KEY } from "./components/api";
import CurrentWeather from "./components/current-weather/currentWeather";
import ForecastWeather from "./components/forecastWeather/forecastWeather";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const URL = "https://api.openweathermap.org/data/2.5";
    const currentWeatherFetch = await fetch(
      `${URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const forecastFetch = await fetch(
      `${URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentData = await response[0].json();
        const forecastData = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...currentData });
        setForecast({ city: searchData.label, ...forecastData });
      })
      .catch((err) => console.error(err));
  };
  console.log(currentWeather);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {!currentWeather ? (
        <div className="notice"><h1 >Select a city</h1></div>
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          {forecast && <ForecastWeather data={forecast} />}
        </>
      )}
    </div>
  );
}

export default App;
