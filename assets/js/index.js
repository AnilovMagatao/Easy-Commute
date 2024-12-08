const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

// Open login form
btnPopup.addEventListener("click", () => {
  wrapper.classList.remove("hidden"); // Ensure the form is visible
  wrapper.classList.add("active-popup");
});

// Close the popup
iconClose.addEventListener("click", () => {
  wrapper.classList.add("hidden"); // Hide the form
  wrapper.classList.remove("active-popup", "active"); // Reset active state
});

// Switch to registration form
registerLink.addEventListener("click", () => {
  wrapper.classList.remove("hidden"); // Ensure the wrapper is visible
  wrapper.classList.add("active");
});

// Switch back to login form
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const closeButton = document.querySelector(".icon-close");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  navigation.classList.remove("active");
});
