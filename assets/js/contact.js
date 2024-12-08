// Get references to the elements
const imageLink = document.getElementById('imageLink');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const closeButton = document.getElementById('closeButton');

// Show fullscreen image when the image link is clicked
imageLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default link behavior
  fullscreenOverlay.classList.remove('hidden');
});

// Hide fullscreen image when the close button is clicked
closeButton.addEventListener('click', () => {
  fullscreenOverlay.classList.add('hidden');
});
