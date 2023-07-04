// Get a reference to the loader element
const loader = document.getElementById('loader');

// Hide the loader initially
loader.style.display = 'none';

// Add an event listener to the window's "load" event
window.addEventListener('load', function() {
  // This event fires when all resources (images, scripts, etc.) have finished loading
  // Hide the loader when the event fires
  loader.style.display = 'none';
});

// Show the loader immediately when the script runs
loader.style.display = 'block';
