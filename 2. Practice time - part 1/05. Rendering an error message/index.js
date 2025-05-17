// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMessage = "Something went wrong, please try again";
let errorPara = document.getElementById("error");

function notice() {
	errorPara.innerText = errorMessage;
}
