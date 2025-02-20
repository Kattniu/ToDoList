export async function loadMap(city) {
    const url = `https://google-map-places.p.rapidapi.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&language=en&region=en`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bc63c7dab0mshacb1d0526916944p1f093cjsn1da0e74e4e04',
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById("map"), {
                center: location,
                zoom: 12
            });
            new google.maps.Marker({ position: location, map: map });
        } else {
            console.error("No se encontraron coordenadas para la ciudad.");
        }
    } catch (error) {
        console.error("Error loading map data:", error);
    }
}
