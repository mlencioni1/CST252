// Lab11.js - Libraries & Intro to jQuery
// Our goal use jQuery to create a  button as well as any other fun things we can think of.
// @link   img/lab11/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  10.10.2021

//add button to output
$(".output").append("<button>Press Me");
//add class=button to button
$("button").addClass("button")
//change background color of button to green
$(".button").css("background-color","lightgreen")

//button alert functions
$(".button").click(function(){
alert("Thanks for the click")
});
