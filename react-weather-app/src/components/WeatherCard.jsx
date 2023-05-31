import React, { useEffect } from "react";
import { useWeather } from "../contexts/WeatherContext";
import "../App.css";

const WeatherCard = () => {
  const { weatherData } = useWeather();

  useEffect(() => {
    console.log("Weather data updated:", weatherData);
  }, [weatherData]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { city, list } = weatherData;
  const location = city.name;

  const getImageSource = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return `${process.env.PUBLIC_URL}/images/clear.png`;
      case "Clouds":
        return `${process.env.PUBLIC_URL}/images/cloud.png`;
      case "Rain":
        return `${process.env.PUBLIC_URL}/images/rain.png`;
      case "Snow":
        return `${process.env.PUBLIC_URL}/images/snow.png`;
      case "Mist":
        return `${process.env.PUBLIC_URL}/images/mist.png`;
      default:
        return `${process.env.PUBLIC_URL}/images/cloud.png`;
    }
  };

  const groupWeatherDataByDate = () => {
    const groupedData = {};

    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      const time = item.dt_txt.split(" ")[1];

      // Sadece saat 12'deki verileri alıyoruz
      if (time === "12:00:00") {
        if (groupedData[date]) {
          groupedData[date].push(item);
        } else {
          groupedData[date] = [item];
        }
      }
    });

    return groupedData;
  };

  const groupedWeatherData = groupWeatherDataByDate();

  return (
    <div className="main">
      <h2>{location}</h2>
      <div className="weather-card-container">
        {Object.keys(groupedWeatherData).map((date) => (
          <div key={date}>
            <h3>{date}</h3>
            <div>
              {groupedWeatherData[date].map((item, index) => (
                <div className="weather-card" key={index}>
                  <img
                    src={getImageSource(item.weather[0].main)}
                    alt="Weather"
                  />
                  <p>Time: {item.dt_txt.split(" ")[1]}</p>
                  <p>Temperature: {item.main.temp}°C</p>
                  <p>Description: {item.weather[0].description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
