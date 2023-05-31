import React, { createContext, useState } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const values = { weatherData, setWeatherData };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => React.useContext(WeatherContext);

export { useWeather, WeatherProvider };
