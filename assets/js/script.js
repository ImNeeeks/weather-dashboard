const locationName = document.querySelector("#location-name");
const submitButton = document.querySelector("#submit");
const todayContainer = document.getElementById('today');
const forecastContainer = document.getElementById('forecast');
const forecastEl = document.getElementById('forecast-heading');

let apiKey = "3697880f00854ade6314b8978e2b035f";
let api = "https://api.openweathermap.org";