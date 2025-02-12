import { getWeather } from './weather.mjs';
import { getEvents } from './events.mjs';

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const city = document.getElementById('city').value;
  // Llamar a las funciones de clima y eventos
  getWeather(city).then(weatherInfo => {
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
  });

  getEvents(city).then(eventList => {
    document.getElementById('eventList').innerHTML = eventList;
  });
});
