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
  