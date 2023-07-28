// Global Variables
var input = document.getElementById("input");
var color = document.getElementById("color");
var show = document.getElementById("showMsg");
var top = document.getElementById("top"); // Avoid using the variable name 'top', as it's a reserved keyword
var out = document.getElementById("out");
var favcolor5 = document.getElementById("favcolor5");
var favcolor6 = document.getElementById("favcolor6");
var favcolor7 = document.getElementById("favcolor7");
var favcolor8 = document.getElementById("favcolor8");
var favcolor1 = document.getElementById("favcolor1");
var favcolor2 = document.getElementById("favcolor2");
var favcolor3 = document.getElementById("favcolor3");
var favcolor4 = document.getElementById("favcolor4");
var showMsg = document.getElementById("showMsg");
var fonts1 = document.getElementById("fonts1");
var fonts2 = document.getElementById("fonts2");
var fonts3 = document.getElementById("fonts3");
var fonts4 = document.getElementById("fonts4");

//**********************
// OnType Function
// (To capture user_input)
//**********************

function showText() {
  var input = document.getElementById("input");
  var showMsg = document.getElementById("showMsg").innerHTML = input.value;
  //****************
  // Button Code
  //****************
}

// Event Listeners for Font Buttons
fonts1.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Style Script', cursive";
});

fonts2.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Palette Mosaic', cursive";
});

fonts3.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Comfortaa', cursive";
});

fonts4.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Shadows Into Light', cursive";
});

// Event Listeners for Color Buttons
favcolor1.addEventListener("click", () => {
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #E62E2D, 0 0 0.8rem #E62E2D, 0 0 2.8rem #E62E2D, inset 0 0 1.3rem #E62E2D";
  showMsg.style.color = "#E62E2D";
});

favcolor2.addEventListener("click", () => {
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem blue, 0 0 0.8rem blue, 0 0 2.8rem blue, inset 0 0 1.3rem blue";
  showMsg.style.color = "blue";
});

favcolor3.addEventListener("click", () => {
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem yellow, 0 0 0.8rem yellow, 0 0 2.8rem yellow, inset 0 0 1.3rem yellow";
  showMsg.style.color = "yellow";
});

favcolor4.addEventListener("click", () => {
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #E72EE9, 0 0 0.8rem #E72EE9, 0 0 2.8rem #E72EE9, inset 0 0 1.3rem #E72EE9";
  showMsg.style.color = "#E72EE9";
});

favcolor5.addEventListener("click", () => {
  showMsg.style.color = 'orange';
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem orange, 0 0 0.8rem orange, 0 0 2.8rem orange, inset 0 0 1.3rem orange";
});

favcolor6.addEventListener("click", () => {
  showMsg.style.color = 'white';
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem white, 0 0 0.8rem white, 0 0 2.8rem white, inset 0 0 1.3rem white";
});

favcolor7.addEventListener("click", () => {
  showMsg.style.color = 'green';
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem green, 0 0 0.8rem green, 0 0 2.8rem green, inset 0 0 1.3rem green";
});

favcolor8.addEventListener("click", () => {
  showMsg.style.color = 'pink';
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem pink, 0 0 0.8rem pink, 0 0 2.8rem pink, inset 0 0 1.3rem pink";
});
