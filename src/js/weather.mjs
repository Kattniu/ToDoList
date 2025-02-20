// Función para obtener el clima
export async function getWeather(city) {
    const apiKey = '9b0c611b4aaec7b9fac76378af721019';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === '404') {
            return '<p>Ciudad no encontrada</p>';
        } else {
            const iconCode = data.weather[0].icon; // Código del ícono del clima
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // URL del ícono

            return `
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Condiciones: ${data.weather[0].description}</p>
                <img src="${iconUrl}" alt="Weather icon">
            `;
        }
    } catch (error) {
        console.error('Error al obtener el clima:', error);
        return '<p>Error al obtener el clima</p>';
    }
}
