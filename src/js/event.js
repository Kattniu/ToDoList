// Manejo de eventos guardados en localStorage
function getSavedEvents() {
    return JSON.parse(localStorage.getItem('savedEvents')) || [];
  }
  