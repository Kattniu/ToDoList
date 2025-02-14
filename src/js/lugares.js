const url = './data/places.json'; // Ruta al archivo JSON
const display = document.querySelector("#cards"); // Contenedor donde se mostrarán las tarjetas

// Función para obtener datos de los lugares desde el archivo JSON
async function getPlacesData(url) {
    try {
        const response = await fetch(url); // Fetch para obtener el JSON
        const data = await response.json(); // Convertir la respuesta a JSON
        displayPlaces(data.places); // Llamar a la función para mostrar los datos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para mostrar los lugares en el DOM
const displayPlaces = (places) => {
    display.innerHTML = ''; // Limpiar el contenido actual

    places.forEach(place => {
        // Crear los elementos necesarios para la tarjeta
        let card = document.createElement("section");
        let placeName = document.createElement("h2");
        let image = document.createElement("img");
        let location = document.createElement("p");

        // Asignar los valores del JSON a los elementos
        placeName.textContent = place.name;
        image.setAttribute("src", place.imageUrl);
        image.setAttribute("alt", `Imagen de ${place.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "150");
        location.textContent = place.location;

        // Agregar los elementos a la tarjeta
        card.appendChild(placeName);
        card.appendChild(image);
        card.appendChild(location);

        // Agregar la tarjeta al contenedor
        display.appendChild(card);
    });
};

// Asegúrate de que el código se ejecute solo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener los botones y el contenedor de tarjetas
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

    // Verificar que los botones y el contenedor existan
    if (gridbutton && listbutton && display) {
        // Cambiar entre vistas de grid y lista
        gridbutton.addEventListener("click", () => {
            display.classList.add("grid");
            display.classList.remove("list");
        });

        listbutton.addEventListener("click", () => {
            display.classList.add("list");
            display.classList.remove("grid");
        });
    } else {
        console.error("No se encontraron los elementos necesarios: botones o contenedor de tarjetas.");
    }

    // Llamar a la función para cargar los datos al cargar la página
    getPlacesData(url);
});
