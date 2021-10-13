// Lab11.js - Libraries & Intro to jQuery
// Our goal use jQuery to create a  button as well as any other fun things we can think of.
// @link   img/lab11/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  10.10.2021

//Add buttons
$("#challenge").append("<button id='challenge-button'>Change!</button>");

$("#problem").append("<button id='problem-button'>Change!</button>");

$("#result").append("<button id='result-button'>Change!</button>");


//On click, buttin toggles class to change content color
$("#challenge-button").click(function(){
    $("#content").toggleClass("red");
});

$("#problem-button").click(function(){
  $("#content").toggleClass("blue")
});

$("#result-button").click(function(){
  $("#content").toggleClass("green")
});
