// Display current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact Form Function
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

  // Prevent page refresh
  event.preventDefault();

  // Show success message
  alert("Thank you for contacting me!");

  // Clear form
  this.reset();
});
