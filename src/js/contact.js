document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && subject && message) {
      console.log(`Form submitted:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
      
      // 🔥 Mostrar el modal
      document.getElementById('successModal').style.display = 'flex';

      // Opcional: Ocultar el modal automáticamente después de 3 segundos
      setTimeout(() => {
          document.getElementById('successModal').style.display = 'none';
          document.getElementById('contactForm').reset();
      }, 3000);
  } else {
      alert("Please fill out all fields before submitting.");
  }
});
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('successModal').style.display = 'none';
  document.getElementById('contactForm').reset();
});
