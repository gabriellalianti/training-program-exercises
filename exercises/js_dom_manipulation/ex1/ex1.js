console.log("Yay! The javascript is running")

// Cat picture source 
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg

// Add name in h2 with #name
document.getElementById('name').innerText = 'Gaby!'

// Make text bigger and green
document.getElementById('bigger').style.fontSize = '50px';
document.getElementById('bigger').style.color = 'Green';

// Change img src to the cat
// Not allowed to change the html body so i'm just using the tag
// Otherwise I would've used an ID
document.querySelector('img').src="https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg";

// Change style of all the squared (remove the hidden tag)
squares = document.getElementsByClassName("square");
// ^Can also use .querySelectorAll
for (square of squares) {
    square.classList.remove("hidden")
}