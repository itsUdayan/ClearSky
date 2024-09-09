import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          {data.weather && data.weather.length > 0 ? (
            <p className="desc">{data.weather[0].description}</p>
          ) : (
            <p className="desc">Null</p>
          )}
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="label">Feels like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind</span>
            <span className="value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="label">Pressure</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
          <div className="parameter-row">
            <span className="label">Visiblity</span>
            <span className="value">
              {Math.round(data.visibility / 1000)} km
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
