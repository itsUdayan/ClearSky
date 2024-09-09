import "./forecastWeather.css";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ForecastWeather = ({ data }) => {
  const daysArray = data.list.filter((item, index) => index % 8 === 0);
  const restdaysArray = data.list.filter((item, index) => index % 8 !== 0);
  const day = new Date().getDay();
  const finalDay = WEEK.slice(day, WEEK.length).concat(WEEK.slice(0, day));
  return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion>
        {daysArray.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <div className="img-day">
                    <img
                      src={`./icons/${item.weather[0].icon}.png`}
                      alt="weather icon"
                    />
                    <label className="day">{finalDay[idx]}</label>
                  </div>
                  <div className="child">
                    <label className="desc">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel >
                <div className="detail">
                    <div className="items">
                        <label className="label">Pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="items">
                        <label className="label">Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="items">
                        <label className="label">Clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="items">
                        <label className="label">Wind</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="items">
                        <label className="label">Feels Like</label>
                        <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className="items">
                        <label className="label">Visibility</label>
                        <label>{item.visibility/1000} Km</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
