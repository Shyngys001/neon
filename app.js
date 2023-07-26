//Gloval Variables

var input=document.getElementById("input");

var color=document.getElementById("color");

var show=document.getElementById("showMsg");


var top=document.getElementById("top");
let out = document.getElementById("out");

//**********************
//  OnType Function
//(To capture user_input)
//**********************


function showText()
{
  var input=document.getElementById("input");
var showMsg=document.getElementById("showMsg").innerHTML=input.value;
//****************
//  Button Code
//****************

//Button 01
  var fonts1=document.getElementById("fonts1").addEventListener("click",() =>
{
  var showMsg=document.getElementById("showMsg");
  showMsg.style.fontFamily = "'Style Script', cursive";
})

//Button 02

var fonts2=document.getElementById("fonts2").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
showMsg.style.fontFamily = " 'Palette Mosaic', cursive";
})

//Button 03

var fonts3=document.getElementById("fonts3").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
showMsg.style.fontFamily = "'Comfortaa', cursive";
})

//Button 04

var fonts4=document.getElementById("fonts4").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
showMsg.style.fontFamily = "'Shadows Into Light', cursive";
})
}

//**********************
//Button Get's End Here
//**********************


//**************************
// :) ->  Color 01 Start :-)

var favcolor1=document.getElementById("favcolor1").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
 show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff,0 0 2rem #E62E2D,0 0 0.8rem #E62E2D,0 0 2.8rem #E62E2D,inset 0 0 1.3rem #E62E2D";
 showMsg.style.color = "#E62E2D";
})

// :) ->  Color 02

var favcolor2=document.getElementById("favcolor2").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff,0 0 2rem #567DA7,0 0 0.8rem #567DA7,0 0 2.8rem #567DA7,inset 0 0 1.3rem #567DA7";
 showMsg.style.color = "#567DA7";

})

// :) ->  Color 03

var favcolor3=document.getElementById("favcolor3").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff,0 0 2rem #E7DB57,0 0 0.8rem #E7DB57,0 0 2.8rem #E7DB57,inset 0 0 1.3rem #E7DB57";
 showMsg.style.color = "#E7DB57";

})

// :) ->  Color 04

var favcolor4=document.getElementById("favcolor4").addEventListener("click",() =>
{
var showMsg=document.getElementById("showMsg");
show.style.boxShadow = "0 0 .2rem #fff, 0 0 .2rem #fff,0 0 2rem #E72EE9,0 0 0.8rem #E72EE9,0 0 2.8rem #E72EE9,inset 0 0 1.3rem #E72EE9";
 showMsg.style.color = "#E72EE9";
})

//**********************
//Color's Code End Here
//**********************
