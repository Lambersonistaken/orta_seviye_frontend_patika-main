import React, { useState } from "react";
import { useWeather } from "../contexts/WeatherContext";
import "../App.css";

const SearchBar = () => {
  const { setWeatherData } = useWeather();
  const [location, setLocation] = useState("");
  const apiKey = "ec2d2d968fa6adcffd48c680c93801d2";

  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Şehir veya ülke girin"
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default SearchBar;
