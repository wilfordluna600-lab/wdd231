const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units={metric}&appid={2fdc2d4b07b9aaaa089c967e73c9bb77}';