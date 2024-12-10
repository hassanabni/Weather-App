const apiKey = 'ae98ab0012284656745842ca80c41790'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.container input')
const searchBtn = document.querySelector('.search')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather (city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  console.log(response);
  var data = await response.json()

  console.log(data)

  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h'

  if (data.weather[0].main == "Rain") {
    weatherIcon.src = 'rainy.png'
  } else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'clear.png'
  } else if (data.weather[0].main == "Foggy") {
    weatherIcon.src = 'foggy.png'
  } else {
    weatherIcon.src = 'partly_cloudy.png'
  }
}
searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value)
})
