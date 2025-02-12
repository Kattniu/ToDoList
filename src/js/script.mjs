export function handleHamburgerMenu() {
    const hamburger = document.querySelector('#myButton');
    const navElement = document.querySelector('#animateme');
  
    hamburger.addEventListener('click', () => {
      navElement.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }
  
  // Función para mostrar el año y la fecha de la última modificación
  export function displayYearAndModificationDate() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  }
  