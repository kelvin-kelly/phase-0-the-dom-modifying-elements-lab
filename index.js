// Write your code here!

// Getting the reference to the main element with id 'main'
const main = document.querySelector('main#main');

// Removing the main element from the DOM
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Setting the id attribute of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Setting the text content of the new <h1> element
newHeader.textContent = "Kelvin Machira is the champion"; 

// Append the new <h1> element to the body
document.body.appendChild(newHeader); 
