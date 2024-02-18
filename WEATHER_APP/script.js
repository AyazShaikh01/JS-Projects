// ======================= Date and Day ========================== //
let currentdate = new Date();
let dayOfWeek = currentdate.getDay();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = weekdays[dayOfWeek];
let dayOfMonth = currentdate.getDate();
let month = currentdate.getMonth() + 1; // Months are zero-based, so we add 1
let year = currentdate.getFullYear();
let formattedDate = `${month}/${dayOfMonth}/${year}`;

// console.log(currentdate);
// console.log(dayOfWeek);
// console.log(weekdays);
// console.log(dayName);
// console.log(dayOfMonth);
// console.log(month);
// console.log(year);
// console.log(formattedDate);

document.querySelector("#day").innerHTML = dayName;
document.querySelector("#date").innerHTML = formattedDate;



// ============================= Data ========================= //
const apiKey = "6d14d4c7efba5940e3f9a4d480b959df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector("#searchBox input");
const searchBtn = document.querySelector("#searchBox button");
const WeatherIcon = document.querySelector(".WeatherIcon");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var Data = await response.json();

  console.log(Data.name);
  console.log(Math.round(Data.main.temp) + "°C");
  console.log(Data.main.humidity + "%");
  console.log(Data.wind.speed + " km/h");
  console.log(Data.weather[0].main);
  console.log(Data);

  document.querySelector("#city").innerHTML = Data.name;
  document.querySelector("#temp").innerHTML =
    Math.round(Data.main.temp) + " °C ";
  document.querySelector("#humidity").innerHTML = Data.main.humidity + " % ";
  document.querySelector("#wind").innerHTML = Data.wind.speed + " km/h ";
  document.querySelector("#type").innerHTML = Data.weather[0].main;

  if (Data.weather[0].main == "Clouds") {
    WeatherIcon.src = "images/clouds.png";
} else if (Data.weather[0].main == "Clear") {
    WeatherIcon.src = "images/clear.png";
} else if (Data.weather[0].main == "Rain") {
    WeatherIcon.src = "images/rain.png";
} else if (Data.weather[0].main == "Mist") {
    WeatherIcon.src = "images/mist.png";
} else if (Data.weather[0].main == "Snow") {
    WeatherIcon.src = "images/snow.png";
} else if (Data.weather[0].main == "Drizzle") {
    WeatherIcon.src = "images/drizzle.png";
}


  document.querySelector("#weather").classList.add("show");
  document.querySelector("#right_Card").classList.add("show");
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    checkWeather(searchBox.value);
  }
});
