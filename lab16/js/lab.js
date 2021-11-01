// Lab16.js - JavaScript CLasses and Objects
// Our goal is to use JS classes and objects .
// @link   img/lab16/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  11.01.2021

function Vehicle (newMake,newModel, newAge, newColor){
  this.make = newMake;
  this.model = newModel;
  this.age = newAge;
  this.color = newColor;
  this.info = function() {
    return("My " + this.make + " " + this.model + " from " + this.age + " is " + this.color);
  }
}

var car = new Vehicle("Honda", "Civic", 2001, "black");

$("#output").append("<p>" + car.info() + "</p>");
