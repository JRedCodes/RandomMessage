//initialize a random message generator
const num = 5;
function generateRandomNumber() {
  return Math.floor(Math.random() * num);
}

// Random message generator function
function randomMessage() {
  const messages = [
    "Hello, World!",
    "JavaScript is awesome!",
    "Keep coding!",
    "You can do it!",
    "Stay positive!"
  ];
  return messages[generateRandomNumber()];
}

// Function to display a random message
function displayMessage() {
  const message = randomMessage();
  console.log(message);
}

// Call the function to display a random message
displayMessage();