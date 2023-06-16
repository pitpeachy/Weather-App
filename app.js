let currentDate = new Date();
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//Sets the current day of the week
let currentDayOfWeek = daysOfWeek[currentDate.getDay()];
let currentDay = document.querySelector(".day");
currentDay.innerHTML = `${currentDayOfWeek}`;
//Sets the current time
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}
let currentTime = document.querySelector(".time");
currentTime.innerHTML = `${hour}:${minute}`;

//Displays city from search
function cityInput(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let cityDisplay = document.querySelector(".location");
  cityDisplay.innerHTML = `${city.value}`;
}
let userLocation = document.querySelector("form");
userLocation.addEventListener("submit", cityInput);

// Get temp from location
function getTemperature(response) {
  let prettyTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".temp-C");
  temperature.innerHTML = `${prettyTemp}&degC`;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(getTemperature);
}
userLocation.addEventListener("submit", search);

// Get current temp based on location data
function displayCurrentTemp(response) {
  let cleanTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".temp-C");
  temperature.innerHTML = `${cleanTemp}&degC`;
  let city = response.data.name;
  let currentCity = document.querySelector(".location");
  currentCity.innerHTML = `${city}`;
}
function retreivePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayCurrentTemp);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retreivePosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
