const API_KEY = 'YOUR_EVENTBRITE_API_KEY';

// Función para obtener eventos desde Eventbrite
async function fetchEvents(query) {
  const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&token=${API_KEY}`);
  const data = await response.json();
  return data.events;
}
