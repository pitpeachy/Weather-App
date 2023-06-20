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
//Set the current date
let monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = monthsOfTheYear[currentDate.getMonth()];
let currentMonth = document.querySelector(".calendar-month");
currentMonth.innerHTML = `${month}`;
let calendarDay = currentDate.getDate();
let currentDateNumber = document.querySelector(".calendar-day");
currentDateNumber.innerHTML = `${calendarDay}`;
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

//Displays weather description from search
function displayWeatherInfo(response) {
  let weatherInfo = response.data.weather[0].description;
  let weatherDescription = document.querySelector(".weather-description");
  weatherDescription.innerHTML = `${weatherInfo}`;
}
function getWeatherInfo(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherInfo);
}

// Get temp C from location
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
// Get temp F from location
function getFTemperature(response) {
  let prettyFTemp = Math.round(response.data.main.temp);
  let fTemperature = document.querySelector(".temp-F");
  fTemperature.innerHTML = `${prettyFTemp}&degF |`;
}
function searchF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(getFTemperature);
}
//Get wind speed
function displayWindSpeed(response) {
  let windSpeed = Math.round(response.data.wind.speed);
  let hWindSpeed = document.querySelector(".wind-speed");
  hWindSpeed.innerHTML = `${windSpeed} mph`;
}
function getWindSpeed(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWindSpeed);
}
let sunnySvgString = `<svg class="main-icon sunshine" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path class="sun-full" d="M256,144c-61.8,0-112,50.2-112,112s50.2,112,112,112s112-50.2,112-112S317.8,144,256,144z M256,336
        c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,336,256,336z" />
    <path class="sun-ray-eight" d="M131.6,357.8l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6s16.4,6.2,22.6,0l22.6-22.6c6.2-6.3,6.2-16.4,0-22.6
        C147.9,351.6,137.8,351.6,131.6,357.8z" />
    <path class="sun-ray-seven" d="M256,400c-8.8,0-16,7.2-16,16v32c0,8.8,7.2,16,16,16s16-7.2,16-16v-32C272,407.2,264.8,400,256,400z" />
    <path class="sun-ray-six" d="M380.5,357.8c-6.3-6.2-16.4-6.2-22.6,0c-6.3,6.2-6.3,16.4,0,22.6l22.6,22.6c6.2,6.2,16.4,6.2,22.6,0
        s6.2-16.4,0-22.6L380.5,357.8z" />
    <path class="sun-ray-five" d="M448,240h-32c-8.8,0-16,7.2-16,16s7.2,16,16,16h32c8.8,0,16-7.2,16-16S456.8,240,448,240z" />
    <path class="sun-ray-four" d="M380.4,154.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6
        C364.1,160.4,374.2,160.4,380.4,154.2z" />
    <path class="sun-ray-three" d="M256,112c8.8,0,16-7.2,16-16V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C240,104.8,247.2,112,256,112z" />
    <path class="sun-ray-two" d="M131.5,154.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L131.5,154.2z" />
    <path class="sun-ray-one" d="M112,256c0-8.8-7.2-16-16-16H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h32C104.8,272,112,264.8,112,256z" />
  </svg>`;
let rainSvgString = `<svg class="rain-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path class="raindrop-one" d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
    <path class="raindrop-two" d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
    <path class="raindrop-three" d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
    <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
		C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3c38.5,0,75.3-14.1,104.3-39.3
		c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,64,400,64z M400,256c-17.1,0-32.9-5.5-45.9-14.7
		C330.6,269.6,295.6,288,256,288c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80
		c10.8,0,21.1,2.2,30.4,6.1C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80
		S444.2,256,400,256z" />
  </svg>`;
let partlyCloudySvgString = `<svg class="sun-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path class="sun-half" d="M127.8,259.1c3.1-4.3,6.5-8.4,10-12.3c-6-11.2-9.4-24-9.4-37.7c0-44.1,35.7-79.8,79.8-79.8
        c40,0,73.1,29.4,78.9,67.7c11.4,2.3,22.4,5.7,32.9,10.4c-0.4-29.2-12-56.6-32.7-77.3C266.1,109,238,97.4,208.2,97.4
        c-29.9,0-57.9,11.6-79.1,32.8c-21.1,21.1-32.8,49.2-32.8,79.1c0,17.2,3.9,33.9,11.2,48.9c1.5-0.1,3-0.1,4.4-0.1
        C117.3,258,122.6,258.4,127.8,259.1z" />
    <path class="cloud" d="M400,256c-5.3,0-10.6,0.4-15.8,1.1c-16.8-22.8-39-40.5-64.2-51.7c-10.5-4.6-21.5-8.1-32.9-10.4
        c-10.1-2-20.5-3.1-31.1-3.1c-45.8,0-88.4,19.6-118.2,52.9c-3.5,3.9-6.9,8-10,12.3c-5.2-0.8-10.5-1.1-15.8-1.1c-1.5,0-3,0-4.4,0.1
        C47.9,258.4,0,307.7,0,368c0,61.8,50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
        c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,256,400,256z M400,448
        c-17.1,0-32.9-5.5-45.9-14.7C330.6,461.6,295.6,480,256,480c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7
        c-44.2,0-80-35.8-80-80s35.8-80,80-80c7.8,0,15.4,1.2,22.5,3.3c2.7,0.8,5.4,1.7,8,2.8c4.5-8.7,9.9-16.9,16.2-24.4
        C182,241.9,216.8,224,256,224c10.1,0,20,1.2,29.4,3.5c10.6,2.5,20.7,6.4,30.1,11.4c23.2,12.4,42.1,31.8,54.1,55.2
        c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80S444.2,448,400,448z" />

    <path class="ray ray-one" d="M16,224h32c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,224,16,224z" />
    <path class="ray ray-two" d="M83.5,106.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6L83.5,60.9c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L83.5,106.2z" />
    <path class="ray ray-three" d="M208,64c8.8,0,16-7.2,16-16V16c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C192,56.8,199.2,64,208,64z" />
    <path class="ray ray-four" d="M332.4,106.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0l-22.6,22.6
        c-6.2,6.2-6.2,16.4,0,22.6S326.2,112.4,332.4,106.2z" />
    <path class="ray ray-five" d="M352,208c0,8.8,7.2,16,16,16h32c8.8,0,16-7.2,16-16s-7.2-16-16-16h-32C359.2,192,352,199.2,352,208z" />
  </svg>`;
let snowSvgString = `<svg class="snow-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path d="M512,176c0-61.8-50.2-112-112-112c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1
		c-5.2-0.8-10.5-1.1-15.8-1.1C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
		c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3C461.8,288,512,237.8,512,176z M354.1,241.3C330.6,269.6,295.6,288,256,288
		c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
		C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
		C382.9,256,367.1,250.5,354.1,241.3z" />

    <path class="snowflake-one" d="M131.8,349.9c-1.5-5.6-7.3-8.9-12.9-7.4l-11.9,3.2c-1.1-1.5-2.2-3-3.6-4.4c-1.4-1.4-2.9-2.6-4.5-3.6l3.2-11.9
	c1.5-5.6-1.8-11.4-7.4-12.9c-5.6-1.5-11.4,1.8-12.9,7.4l-3.2,12.1c-3.8,0.3-7.5,1.2-10.9,2.9l-8.8-8.8c-4.1-4.1-10.8-4.1-14.8,0
	c-4.1,4.1-4.1,10.8,0,14.9l8.8,8.8c-1.6,3.5-2.6,7.2-2.9,11l-12,3.2c-5.6,1.5-9,7.2-7.5,12.9c1.5,5.6,7.3,8.9,12.9,7.4l11.9-3.2
	c1.1,1.6,2.2,3.1,3.7,4.5c1.4,1.4,2.9,2.6,4.4,3.6l-3.2,11.9c-1.5,5.6,1.8,11.4,7.4,12.9c5.6,1.5,11.3-1.8,12.8-7.4l3.2-12
	c3.8-0.3,7.5-1.3,11-2.9l8.8,8.8c4.1,4.1,10.7,4,14.8,0c4.1-4.1,4.1-10.7,0-14.8l-8.8-8.8c1.7-3.5,2.7-7.2,2.9-11l12.1-3.2
	C130,361.3,133.3,355.6,131.8,349.9z M88.6,371c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.8,0-14.8c4.1-4.1,10.8-4.1,14.9,0
	S92.6,366.9,88.6,371z" />
    <path class="snowflake-two" d="M304.8,437.6l-12.6-7.2c0.4-2.2,0.7-4.4,0.7-6.7c0-2.3-0.3-4.5-0.7-6.7l12.6-7.2c5.9-3.4,7.9-11,4.5-16.8
	c-3.4-5.9-10.9-7.9-16.8-4.5l-12.7,7.3c-3.4-2.9-7.2-5.2-11.5-6.7v-14.6c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3V389
	c-4.3,1.5-8.1,3.8-11.5,6.7l-12.7-7.3c-5.9-3.4-13.5-1.4-16.9,4.5c-3.4,5.9-1.4,13.4,4.5,16.8l12.5,7.2c-0.4,2.2-0.7,4.4-0.7,6.7
	c0,2.3,0.3,4.5,0.7,6.7l-12.5,7.2c-5.9,3.4-7.9,11-4.5,16.9s10.9,7.9,16.8,4.5l12.7-7.3c3.4,2.9,7.2,5.1,11.5,6.7V473
	c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-14.6c4.3-1.5,8.2-3.8,11.5-6.7l12.7,7.3c5.9,3.4,13.4,1.4,16.8-4.5
	C312.8,448.6,310.7,441.1,304.8,437.6z M256,436c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3s12.3,5.5,12.3,12.3
	C268.3,430.5,262.8,436,256,436z" />
    <path class="snowflake-three" d="M474.2,396.2l-12.1-3.2c-0.3-3.8-1.2-7.5-2.9-11l8.8-8.8c4.1-4.1,4.1-10.8,0-14.9c-4.1-4.1-10.7-4.1-14.8,0
	l-8.8,8.8c-3.5-1.6-7.1-2.6-11-2.9l-3.2-12.1c-1.5-5.6-7.2-8.9-12.9-7.4c-5.6,1.5-8.9,7.3-7.4,12.9l3.2,11.9
	c-1.6,1.1-3.1,2.3-4.5,3.7c-1.4,1.4-2.5,2.9-3.6,4.5l-11.9-3.2c-5.6-1.5-11.4,1.9-12.9,7.4c-1.5,5.6,1.9,11.4,7.4,12.9l12,3.2
	c0.3,3.8,1.3,7.5,3,11l-8.8,8.8c-4.1,4.1-4.1,10.7,0,14.8c4.1,4.1,10.7,4.1,14.8,0l8.8-8.8c3.5,1.7,7.2,2.7,11,3l3.2,12
	c1.5,5.6,7.2,8.9,12.9,7.4c5.6-1.5,9-7.2,7.5-12.9l-3.2-11.9c1.5-1.1,3-2.2,4.5-3.6c1.4-1.4,2.5-2.9,3.6-4.5l11.9,3.2
	c5.6,1.5,11.4-1.9,12.9-7.4C483.1,403.5,479.8,397.8,474.2,396.2z M438.3,402.9c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.7,0-14.9
	c4.1-4.1,10.8-4.1,14.9,0C442.4,392.2,442.4,398.9,438.3,402.9z" />
  </svg>`;
let thunderSvgString = `<svg class="thunder-cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
		C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c12.3,10.7,26.2,19,40.9,25.4l24.9-24.9
		c-23.5-7.6-44.2-21.3-59.6-39.9c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
		C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
		c-17.1,0-32.9-5.5-45.9-14.7c-10.4,12.5-23.3,22.7-37.6,30.6L303,312.2c20.9-6.6,40.5-16.9,57.3-31.6c12.6,4.8,26,7.3,39.7,7.3
		c61.8,0,112-50.2,112-112S461.8,64,400,64z" />
    <polygon class="bolt" points="192,352 224,384 192,480 288,384 256,352 288,256 " />
  </svg>`;

//Replace main icon based on weather description data
let svgmap = {
  sunny: sunnySvgString,
  rain: rainSvgString,
  thunder: thunderSvgString,
  "partly-cloudy": partlyCloudySvgString,
  snow: snowSvgString,
};
function getsvgcontent(key) {
  return svgmap[key];
}
function getsvgkey(key) {
  if (key.includes("cloud") || key.includes("broken")) {
    return "partly-cloudy";
  } else if (key.includes("sky")) {
    return "sunny";
  } else if (key.includes("snow")) {
    return "snow";
  } else if (key.includes("thunder")) {
    return "thunder";
  } else if (key.includes("rain")) {
    return "rain";
  } else {
    return "sunny";
  }
}
function displayMainIcon(response) {
  let svgkey = getsvgkey(response.data.weather[0].description);
  const svgcontent = getsvgcontent(svgkey);
  let mainIcon = document.querySelector(".current-icon-container");
  mainIcon.innerHTML = svgcontent;
}
function getMainIcon(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayMainIcon);
}
// 5 DAY FORECAST DAYS OF THE WEEK
let shortDaysOfTheWeek = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];
let day1Future = currentDate.setDate(currentDate.getDate() + 1);
let day1OfTheWeek = shortDaysOfTheWeek[currentDate.getDay()];
let day1Week = document.querySelector(".day1");
day1Week.innerHTML = `${day1OfTheWeek}`;
//
let day2Future = currentDate.setDate(currentDate.getDate() + 1);
let day2OfTheWeek = shortDaysOfTheWeek[currentDate.getDay()];
let day2Week = document.querySelector(".day2");
day2Week.innerHTML = `${day2OfTheWeek}`;
//
let day3Future = currentDate.setDate(currentDate.getDate() + 1);
let day3OfTheWeek = shortDaysOfTheWeek[currentDate.getDay()];
let day3Week = document.querySelector(".day3");
day3Week.innerHTML = `${day3OfTheWeek}`;
//
let day4Future = currentDate.setDate(currentDate.getDate() + 1);
let day4OfTheWeek = shortDaysOfTheWeek[currentDate.getDay()];
let day4Week = document.querySelector(".day4");
day4Week.innerHTML = `${day4OfTheWeek}`;
//
let day5Future = currentDate.setDate(currentDate.getDate() + 1);
let day5OfTheWeek = shortDaysOfTheWeek[currentDate.getDay()];
let day5Week = document.querySelector(".day5");
day5Week.innerHTML = `${day5OfTheWeek}`;
//
//5 DAY FORECAST ICONS ONLY
function displayDay1Icon(response) {
  console.log(response.data.list[0].weather[0].description);
  let svgkey = getsvgkey(response.data.list[0].weather[0].description);
  const svgcontent = getsvgcontent(svgkey);
  let day1Icon = document.querySelector(".day1-icon-container");
  day1Icon.innerHTML = svgcontent;
}
function getDay1Icon(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayDay1Icon);
}
//
function displayDay2Icon(response) {
  console.log(response.data.list[2].weather[0].description);
  let svgkey = getsvgkey(response.data.list[2].weather[0].description);
  const svgcontent = getsvgcontent(svgkey);
  let day2Icon = document.querySelector(".day2-icon-container");
  day2Icon.innerHTML = svgcontent;
}
function getDay2Icon(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayDay2Icon);
}
//
function displayDay3Icon(response) {
  console.log(response.data.list[10].weather[0].description);
  let svgkey = getsvgkey(response.data.list[10].weather[0].description);
  const svgcontent = getsvgcontent(svgkey);
  let day3Icon = document.querySelector(".day3-icon-container");
  day3Icon.innerHTML = svgcontent;
}
function getDay3Icon(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayDay3Icon);
}
//
function displayDay4Icon(response) {
  console.log(response.data.list[18].weather[0].description);
  let svgkey = getsvgkey(response.data.list[18].weather[0].description);
  const svgcontent = getsvgcontent(svgkey);
  let day4Icon = document.querySelector(".day4-icon-container");
  day4Icon.innerHTML = svgcontent;
}
function getDay4Icon(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayDay4Icon);
}
//
function displayDay5Icon(response) {
  console.log(response.data.list[26].weather[0].description);
  let svgkey = getsvgkey(response.data.list[26].weather[0].description);
  const svgcontent = getsvgcontent(svgkey);
  let day5Icon = document.querySelector(".day5-icon-container");
  day5Icon.innerHTML = svgcontent;
}
function getDay5Icon(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayDay5Icon);
}
//
//5 DAY FORECAST TEMPS ONLY
function displayDay1TempF(response) {
  console.log(response);
  let day1TempF = Math.round(response.data.list[0].main.temp);
  let displayDay1TempF = document.querySelector(".week-temp-1");
  displayDay1TempF.innerHTML = `${day1TempF}&degF`;
}
function getDay1TempF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDay1TempF);
}
//
function displayDay2TempF(response) {
  let day2TempF = Math.round(response.data.list[2].main.temp);
  let displayDay2TempF = document.querySelector(".week-temp-2");
  displayDay2TempF.innerHTML = `${day2TempF}&degF`;
}
function getDay2TempF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDay2TempF);
}
//
function displayDay3TempF(response) {
  let day3TempF = Math.round(response.data.list[10].main.temp);
  let displayDay3TempF = document.querySelector(".week-temp-3");
  displayDay3TempF.innerHTML = `${day3TempF}&degF`;
}
function getDay3TempF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDay3TempF);
}
//
function displayDay4TempF(response) {
  let day4TempF = Math.round(response.data.list[18].main.temp);
  let displayDay4TempF = document.querySelector(".week-temp-4");
  displayDay4TempF.innerHTML = `${day4TempF}&degF`;
}
function getDay4TempF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDay4TempF);
}
//
function displayDay5TempF(response) {
  let day5TempF = Math.round(response.data.list[26].main.temp);
  let displayDay5TempF = document.querySelector(".week-temp-5");
  displayDay5TempF.innerHTML = `${day5TempF}&degF`;
}
function getDay5TempF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let apiKey = "3998b1623f24f3250ddc0fe708c716d8";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayDay5TempF);
}
// Event Listeners <3
userLocation.addEventListener("submit", search);
userLocation.addEventListener("submit", getWeatherInfo);
userLocation.addEventListener("submit", searchF);
userLocation.addEventListener("submit", getWindSpeed);
userLocation.addEventListener("submit", getMainIcon);
userLocation.addEventListener("submit", getDay1TempF);
userLocation.addEventListener("submit", getDay2TempF);
userLocation.addEventListener("submit", getDay3TempF);
userLocation.addEventListener("submit", getDay4TempF);
userLocation.addEventListener("submit", getDay5TempF);
userLocation.addEventListener("submit", getDay1Icon);
userLocation.addEventListener("submit", getDay2Icon);
userLocation.addEventListener("submit", getDay3Icon);
userLocation.addEventListener("submit", getDay4Icon);
userLocation.addEventListener("submit", getDay5Icon);

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

// Default Data
function defaultLoad() {
  let dummyEvt = new Event("submit");
  document.getElementById("city-name").value = "New York";
  cityInput(dummyEvt);
  search(dummyEvt);
  getWeatherInfo(dummyEvt);
  searchF(dummyEvt);
  getWindSpeed(dummyEvt);
  getMainIcon(dummyEvt);
  getDay1TempF(dummyEvt);
  getDay2TempF(dummyEvt);
  getDay3TempF(dummyEvt);
  getDay4TempF(dummyEvt);
  getDay5TempF(dummyEvt);
  getDay1Icon(dummyEvt);
  getDay2Icon(dummyEvt);
  getDay3Icon(dummyEvt);
  getDay4Icon(dummyEvt);
  getDay5Icon(dummyEvt);
}
window.addEventListener("load", defaultLoad);
