// Función para realizar la búsqueda de eventos
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const eventsList = document.getElementById('events-list');

searchButton.addEventListener('click', async () => {
  const query = searchInput.value;
  if (query) {
    const events = await fetchEvents(query);
    displayEvents(events);
  }
});

// Función para obtener eventos desde Eventbrite (ejemplo)
async function fetchEvents(query) {
  const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&token=YOUR_API_KEY`);
  const data = await response.json();
  return data.events;
}

// Función para mostrar eventos en el DOM
function displayEvents(events) {
  eventsList.innerHTML = '';
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    eventCard.innerHTML = `
      <h3>${event.name.text}</h3>
      <p>${event.location.address}</p>
      <button onclick="saveEvent(${event.id})">Guardar evento</button>
    `;
    eventsList.appendChild(eventCard);
  });
}

// Función para guardar eventos
function saveEvent(eventId) {
  const savedEvents = JSON.parse(localStorage.getItem('savedEvents')) || [];
  savedEvents.push(eventId);
  localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
}
