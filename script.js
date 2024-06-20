const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Bonn&format=json&u=c';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '86deea953amsh9188b589ad5f3b8p176901jsn7774713e42a8',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

// const weather = async() => {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }}
// weather()
const weatherDiv = document.getElementById("weatherDiv")

fetch(url, options)
    .then(response => response.json())
    .then(data => weatherFunction(data))
    .catch(err => console.error(err))
    
function weatherFunction(data) {
    currentTemp = `<h2>${data.current_observation.condition.temperature}</h2>`
    

    weatherDiv.innerHTML = `${#}`
}
