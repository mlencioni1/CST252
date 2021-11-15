// Lab17.js - Object Oriented design
// Our goal is learn object oriented design .
// @link   img/lab17/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  11.03.2021

class Vehicle{
  constructor(newMake,newModel, newAge, newColor){
    this.make = newMake;
    this.model = newModel;
    this.age = newAge;
    this.color = newColor;
  }
    info(){
      return "My " + this.make + " " + this.model + " from " + this.age + " is " + this.color;

  }
}

mycar = new Vehicle("Honda", "Civic", "2001", "black");

$("#output").append("<p>" + mycar.info() + "</p>");
