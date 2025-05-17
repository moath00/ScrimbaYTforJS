// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeElement = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Moath";
let greeting = "Hi, my name is ";

// Render the welcome message using welcomeEl.innerText

welcomeElement.innerText = greeting + name;
