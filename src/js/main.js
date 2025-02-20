import { getWeather } from './weather.mjs';
import { getEvents } from './events.mjs';
import { loadMap } from './maps.mjs';

document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();

    if (city) {
        // Obtener eventos
        const eventsHTML = await getEvents(city);
        document.getElementById('eventList').innerHTML = eventsHTML;

        // Obtener clima
        const weatherHTML = await getWeather(city);
        document.getElementById('weatherInfo').innerHTML = weatherHTML;

        // Cargar el mapa
        loadMap(city);
    }
});
