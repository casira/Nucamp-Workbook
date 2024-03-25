async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const city = "Parksley";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  let response = await fetch(url);
  let weather = await response.json();
  console.log(weather);
  displayWeather(weather);
}
fetchWeather();

function displayWeather(weatherObject) {
  let temp = weatherObject.main.temp;
  let description = weatherObject.weather[0].description;
  let icon = weatherObject.weather[0].icon;
  //icon display
  let weatherDisplay = document.createElement("img");
  weatherDisplay.src = `https://openweathermap.org/img/w/${icon}.png`;
  document.getElementById("weather").appendChild(weatherDisplay);
  //temp in degreees F
  let tempDisplay = document.createElement("span");
  tempDisplay.textContent = `${temp.toFixed(1)}\u00B0`;
  document.getElementById("weather").appendChild(tempDisplay);
  //description of weather
  let descriptionDisplay = document.createElement("span");
  descriptionDisplay.textContent = `| ${description}`;
  document.getElementById("weather").appendChild(descriptionDisplay);
}
