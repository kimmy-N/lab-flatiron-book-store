// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // I read the comment and understand to change the background color
  document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // lightblue
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // I read the comment and understand to reset the background color to white
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const inputValue = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = `You typed: ${inputValue}`;
}

// Bonus: Mouseover and mouseout events
function handleMouseOver(event) {
  event.target.style.backgroundColor = 'yellow';
}

function handleMouseOut(event) {
  event.target.style.backgroundColor = '';
}

// Bonus: Submit event
function handleFormSubmit(event) {
  event.preventDefault();
  const formValue = document.getElementById('formInput').value;
  document.getElementById('formResult').textContent = `Form submitted with: ${formValue}`;
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)

  // Bonus: Attach mouseover and mouseout to buttons
  document
    .getElementById('changeColorButton')
    .addEventListener('mouseover', handleMouseOver)
  document
    .getElementById('changeColorButton')
    .addEventListener('mouseout', handleMouseOut)
  document
    .getElementById('resetColorButton')
    .addEventListener('mouseover', handleMouseOver)
  document
    .getElementById('resetColorButton')
    .addEventListener('mouseout', handleMouseOut)

  // Bonus: Attach submit event to form
  document
    .getElementById('sampleForm')
    .addEventListener('submit', handleFormSubmit)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  handleMouseOver,
  handleMouseOut,
  handleFormSubmit,
  setupEventListeners,
}
