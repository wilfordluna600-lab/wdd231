const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "2fdc2d4b07b9aaaa089c967e73c9bb77"
const myLat = "-14.0754"
const myLong = "-75.7336"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data)   ;
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  myTown.innerHTML = data.name
  myDescription.innerHTML = data.weather[0].description
  myTemperature.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('SRC', iconsrc)
  myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();