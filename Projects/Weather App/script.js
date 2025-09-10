function showWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("weather-result");

  const weatherData = {
    mogadishu: "🌞 Sunny, 32°C",
    hargeisa: "⛅ Partly Cloudy, 28°C",
    garowe: "🌧️ Rainy, 24°C",
  };

  if (city === "") {
    result.innerHTML = "Please select a city.";
  } else {
    result.innerHTML = `The weather in ${capitalize(city)} is: <strong>${
      weatherData[city]
    }</strong>`;
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
