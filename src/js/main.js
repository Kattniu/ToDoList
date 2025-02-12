import { getWeather } from './weather.mjs';
import { getEvents } from './events.mjs';
import { handleHamburgerMenu, displayYearAndModificationDate } from './script.mjs';
import { handleContactFormSubmission } from './contact.mjs';
import { setupViewButtons } from './lugares.mjs';
// Llamar a las funciones que necesitan ejecutarse
handleHamburgerMenu();
displayYearAndModificationDate();
// Call the setup function that will handle the event listeners and load the data
setupViewButtons();
// Call the function to handle form submission
handleContactFormSubmission();

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
