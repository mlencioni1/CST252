// Lab6.js - Arrays and Objects
// Our goal is to create, define, and identify arrays and objects.
// @link   img/lab6/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  09.20.2021

//Defining variables
var myTransport = [" Car"," Skateboard", " Bus", " Carpool"]
var myMainRide = {make: "Honda", model: "Civic", color:"Black", year:"2001"}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>")
document.writeln("</br> My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
