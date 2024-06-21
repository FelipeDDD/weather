function getWeather(city) {
     const url = `http://localhost:3000/locations/${city}`
//   const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "f6aa5f2322mshfe15ec228adcb0ap16dc73jsn7ceb62b13bef",
//       "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
//     },
//   };

  fetch(url)
    .then((response) => response.json())
    .then((data) => weatherFunction(data))
    .catch((err) => console.error(err));
}
// const weather = async() => {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }}
// weather()
const weatherDiv = document.getElementById("weatherDiv");
const weatherCondition = document.getElementById("weatherCondition");
const city = document.getElementById("city");
const searchInput = document.getElementById("searchInput");

function weatherFunction(data) {
  let weatherC = `${data.current_observation.condition.text}`;
  let currentTemp = `<h5>Temperatura: ${data.current_observation.condition.temperature}ºC</h5>`;
  let minTemp = `<h5>Temperatura mínima: ${data.forecasts[0].low}ºC</h5>`;
  let maxTemp = `<h5>Temperatura máxima: ${data.forecasts[0].high}ºC</h5>`;
  let cityInput = `${ data.location.city}`
 
  city.textContent = `${cityInput}`
  weatherCondition.textContent = `${weatherC}`;
  weatherDiv.innerHTML = `${currentTemp}${minTemp}${maxTemp}`;
}

function searchClick() {
  const searchCity = document.getElementById("searchInput").value;
  if (searchCity != "") {
    getWeather(searchCity);
  } else {
    alert("perdeu");
  }
}

searchButton.addEventListener("click", searchClick);

function check(x) {
  Array.isArray(x)
    ? console.log("É um array")
    : console.log("Não é um array, é um " + typeof x);
}
