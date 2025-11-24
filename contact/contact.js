// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Contact Form Handling
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page refresh

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields!");
    return;
  }

  successMsg.style.display = "block";

  // Clear the fields
  form.reset();

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});
