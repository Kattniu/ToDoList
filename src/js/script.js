const hamburger = document.querySelector('#myButton');
const navElemeent = document.querySelector('#animateme');

hamburger.addEventListener('click', () => {
    navElemeent.classList.toggle('open');
    hamburger.classList.toggle('open');
})
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
