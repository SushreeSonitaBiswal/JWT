// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change background color
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Create button
const button = document.createElement("button");
button.textContent = "Change Background Color";
button.onclick = changeBackgroundColor;

// Add button to page
document.body.appendChild(button);
