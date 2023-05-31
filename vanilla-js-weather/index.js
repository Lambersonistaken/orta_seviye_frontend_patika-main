const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const humidityIcon = document.querySelector(".humidity i");
const humidityText = document.querySelector(".humidity span");
const windIcon = document.querySelector(".wind i");
const windText = document.querySelector(".wind span");

const getWeather = () => {
  const apiKey = "ec2d2d968fa6adcffd48c680c93801d2";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(".weather-details .humidity");
      const wind = document.querySelector(".weather-details .wind");

      switch (data.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Clouds":
          image.src = "images/cloud.png";
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Mist":
          image.src = "images/mist.png";
          break;
        default:
          image.src = "images/cloud.png";
          break;
      }

      temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      description.innerHTML = `${data.weather[0].description}`;
      humidityIcon.className = "fa-solid fa-water";
      humidityText.innerHTML = `${data.main.humidity}%`;
      windIcon.className = "fa-solid fa-wind";
      windText.innerHTML = `${parseInt(data.wind.speed)} km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "600px";
    });
};

search.addEventListener("click", getWeather);
