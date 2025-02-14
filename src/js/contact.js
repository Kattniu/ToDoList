export function handleContactFormSubmission() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Get the values of the fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && subject && message) {
      // Optionally, handle the form data before sending
      // Example: you can log it or send it to an API
      console.log(`Form submitted: \nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
      
      // Submit the form (since we prevented default, now we can proceed)
      this.submit();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
}
