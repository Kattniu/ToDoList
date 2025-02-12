// Función para obtener eventos
export async function getEvents(city) {
    const url = `https://zaza81-events-italy-v1.p.rapidapi.com/events?city=${city}`;
  
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bc63c7dab0mshacb1d0526916944p1f093cjsn1da0e74e4e04',
                'X-RapidAPI-Host': 'zaza81-events-italy-v1.p.rapidapi.com'
            }
        });
        const data = await response.json();
        
        if (data.events && data.events.length > 0) {
            return data.events.map(event => `<p>${event.name} - ${event.date}</p>`).join('');
        } else {
            return 'No se encontraron eventos';
        }
    } catch (error) {
        console.error('Error al obtener eventos:', error);
    }
  }
  