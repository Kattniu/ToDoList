document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let city = document.getElementById('city').value;
  getWeather(city);
  getEvents(city);
});

async function getWeather(city) {
  let apiKey = '9b0c611b4aaec7b9fac76378af721019';  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
      let response = await fetch(url);
      let data = await response.json();
      
      if (data.cod === '404') {
          document.getElementById('weatherInfo').innerHTML = 'Ciudad no encontrada';
      } else {
          document.getElementById('weatherInfo').innerHTML = `
              <p>Temperatura: ${data.main.temp} °C</p>
              <p>Condiciones: ${data.weather[0].description}</p>
          `;
      }
  } catch (error) {
      console.error('Error al obtener el clima:', error);
  }
}

async function getEvents(city) {
  let url = `https://zaza81-events-italy-v1.p.rapidapi.com/events?city=${city}`;
  
  try {
      let response = await fetch(url, {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'bc63c7dab0mshacb1d0526916944p1f093cjsn1da0e74e4e04',  
              'X-RapidAPI-Host': 'zaza81-events-italy-v1.p.rapidapi.com'
          }
      });
      let data = await response.json();
      
      if (data.events && data.events.length > 0) {
          let eventList = data.events.map(event => `<p>${event.name} - ${event.date}</p>`).join('');
          document.getElementById('eventList').innerHTML = eventList;
      } else {
          document.getElementById('eventList').innerHTML = 'No se encontraron eventos';
      }
  } catch (error) {
      console.error('Error al obtener eventos:', error);
  }
}
