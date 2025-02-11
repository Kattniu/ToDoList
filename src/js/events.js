async function getEvents(city) {
    // Aquí usaremos el endpoint correcto y añadimos los parámetros requeridos
    let url = `https://zaza81-events-v1.p.rapidapi.com/events_search_paging?lat=45.47004198743776&lon=9.186254772791488&radius=50.0`;  // Necesitarás obtener la latitud y longitud de la ciudad

    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bc63c7dab0mshacb1d0526916944p1f093cjsn1da0e74e4e04',  // Asegúrate de usar tu propia clave API
                'X-RapidAPI-Host': 'zaza81-events-v1.p.rapidapi.com'
            }
        });
        let data = await response.json();

        // Verifica si la respuesta tiene eventos y muestra los eventos
        if (data.events && data.events.length > 0) {
            let eventList = data.events.map(event => `<p>${event.name} - ${event.date}</p>`).join('');
            document.getElementById('eventList').innerHTML = eventList;
        } else {
            document.getElementById('eventList').innerHTML = 'No events found';
        }
    } catch (error) {
        console.error('Error getting events:', error);
    }
}
