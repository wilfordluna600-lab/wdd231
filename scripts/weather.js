const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "2fdc2d4b07b9aaaa089c967e73c9bb77"
const myLat = "49.7503"
const myLong = "6.6384"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units={metric}&appid={2fdc2d4b07b9aaaa089c967e73c9bb77}';

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data)   ;
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  console.log('hello')
  myTown.innerHTML = data.name
  myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('SRC', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
//   currentTemp.innerHTML = `${data._____}&deg;F`;
//   const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
//   let desc = data.weather[0].______;
//   weatherIcon.setAttribute('___', _____);
//   weatherIcon.setAttribute('___', _____);
//   captionDesc.textContent = `${desc}`;
}

apiFetch();