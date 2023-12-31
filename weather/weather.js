const api = {
  key: '32d0ee24a6b50accddeb9685479f0a3d',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('input');
searchBox.addEventListener('keypress', setQuery)

function setQuery (e) {
  if (e.keyCode == 13) {
    getResult(searchBox.value);
    console.log(searchBox.value)
  }
}

function getResult (query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.city')
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.date');
  date.innerHTML = dateBuilder(now)

  let temp = document.querySelector('.temp')
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`
}

function dateBuilder (s) {
  let monhts = ['Jan','Feb','Ma','Ap','May','June','Jule','Aug','Sep','Oc','Nov','Dec'];
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = days[s.getDay()];
  let date = s.getDate()
  let month = monhts[s.getMonth()];
  let year = s.getFullYear();

  return `${day} ${date} ${month} ${year}`
}


displayResults()
getResult()