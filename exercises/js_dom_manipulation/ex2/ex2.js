console.log("Exercise 2")

// Alter .js and .html so that when button(x) is pressed, it will fit in the center box with the corresponding html


// Bonus: make it so that the text fills in when the mouse leaves the button instead of the click event
// Also add another button

const box = document.querySelector("#display-box");

function insertText(text) {
    box.innerHTML = document.querySelector(text).innerHTML;
}
