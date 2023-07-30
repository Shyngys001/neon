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


let write = document.getElementById("write");
let background = document.getElementById("background");
let writen = document.getElementById("writen");

let font = document.getElementById("font");
let fonts = document.getElementById("fonts");

let colors = document.getElementById("colors");
let choose_color = document.getElementById("choose_color");

let fons = document.getElementById("fons");
let fon = document.getElementById("fon");
let fon1 = document.getElementById("fon1");
let fon2 = document.getElementById("fon2");
let fon3 = document.getElementById("fon3");
let fon4 = document.getElementById("fon4");



fon1.addEventListener("click", () => {
  out.style.backgroundImage = "url('https://avatars.mds.yandex.net/i?id=db84d9d2abc3126676999bc7e819e0d4fcc6a873-5234741-images-thumbs&n=13')"
})
fon2.addEventListener("click", () => {
  out.style.backgroundImage = "url('https://avatars.mds.yandex.net/i?id=e1867adeaa3be2253ed03e12b04fc9f1e0e878d3-6408724-images-thumbs&n=13')"
})
fon3.addEventListener("click", () => {
  out.style.backgroundImage = "url('https://avatars.mds.yandex.net/i?id=d78e29a1b94cb440bedbef20ff6e4a977b3b7298-8564680-images-thumbs&n=13')"
})
fon4.addEventListener("click", () => {
  out.style.backgroundImage = "url('https://avatars.mds.yandex.net/i?id=e7adcdc064c3d09e123362f337676e5502033b81-9612020-images-thumbs&n=13')"
})

//**********************
// OnType Function
// (To capture user_input)
//**********************

write.addEventListener("click", () => {
  choose_color.style.display = "none";
  fonts.style.display = "none";
  writen.style.display = "block";
  fon.style.display = "none";

})

background.addEventListener("click", () => {
  choose_color.style.display = "block";
  fonts.style.display = "none";
  writen.style.display = "none";
  fon.style.display = "none";

})

font.addEventListener("click", () => {
  fonts.style.display = "block";
  choose_color.style.display = "none";
  writen.style.display = "none";
  fon.style.display = "none";

})

fons.addEventListener("click", () => {
  fonts.style.display = "none";
  choose_color.style.display = "none";
  writen.style.display = "none";
  fon.style.display = "flex";

})




function showText() {
  var input = document.getElementById("input");
  var showMsg = document.getElementById("showMsg").innerHTML = input.value;
  //****************
  // Button Code
  //****************
}

// Event Listeners for Font Buttons
fonts1.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Pacifico', cursive";
});

fonts2.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Caveat', cursive";
});

fonts3.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Comfortaa', cursive";
});

fonts4.addEventListener("click", () => {
  showMsg.style.fontFamily = "'Advent Pro', sans-serif";
});

// Event Listeners for Color Buttons
favcolor1.addEventListener("click", () => {
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem red, 0 0 0.8rem red, 0 0 2.8rem red, inset 0 0 1.3rem red";
  showMsg.style.color = "red";
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
  show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem blueviolet, 0 0 0.8rem blueviolet, 0 0 2.8rem blueviolet, inset 0 0 1.3rem blueviolet";
  showMsg.style.color = "blueviolet";
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
