// Lab7.js - Functions
// Our goal is to create, define, and identify arrays and objects.
// @link   img/lab6/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  09.22.2021


//Comment Block to explain Functions

//Defining Variables
//Goal is to take characters in a name and sorting the letters

function sortUserName() {
  var userName = window.prompt("Hello. State your name so I can fix it.");
  console.log("userName =", nameArray);
//split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
// sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
// join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
// Abvoe lines could have been a single line:
// userName.toLower().split("").sort().
  return nameSorted;
}

// Output
document.writeln("Oh hello again, I fixed your name: ",
    sortUserName(), "</br>");
