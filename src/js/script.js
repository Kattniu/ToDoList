const hamburger = document.querySelector('#myButton');
const navElemeent = document.querySelector('#animateme');

hamburger.addEventListener('click', () => {
    navElemeent.classList.toggle('open');
    hamburger.classList.toggle('open');
})

// Actualizar el año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mostrar la última modificación de la página
document.getElementById("lastModified").textContent = document.lastModified;




document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});
