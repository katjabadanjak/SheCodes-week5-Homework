let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentDate.getDay()];
let currentHour = currentDate.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

let currentMinutes = currentDate.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

let dayChange = document.querySelector("#today");
dayChange.innerHTML = `Today | ${currentDay} ${currentHour}:${currentMinutes}`;

//Week5

function searchDefaultCity(city) {
  let apiKey = "0f955f248c77e13bb6a45d6e840419ee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newWeather);
}

searchDefaultCity("London");

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchDefaultCity(city);
}

let form = document.querySelector("#search");
form.addEventListener("submit", handleSubmit);

function newWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temper").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#temper-cold").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchLocation(position) {
  let apiKey = "0f955f248c77e13bb6a45d6e840419ee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(newWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#curr-loc-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
