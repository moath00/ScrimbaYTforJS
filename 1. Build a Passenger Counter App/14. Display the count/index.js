// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let countElement = document.getElementById("count-el");
let count = 0;

function increment() {
	count = count + 1;
	countElement.innerText = count;
}
