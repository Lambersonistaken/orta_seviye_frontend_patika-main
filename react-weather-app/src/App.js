import React from "react";
import "./App.css";
import { WeatherProvider, useWeather } from "./contexts/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
};

const AppContent = () => {
  const { weatherData } = useWeather();

  return (
    <div className="app">
      <SearchBar />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
