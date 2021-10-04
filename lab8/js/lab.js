// Lab8.js - Anon Functions and Callbacks
// Our goal is to create Anon Functions and call them back.
// @link   img/lab8/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  09.27.2021

//Anon Functions: function to add text to given element

var num = [3, 4, 7, 1, 9, 5]

function isEven(x) {
    return (x % 2 == 0);
}

console.log("Is the Number 1 Even? ", isEven(1));
console.log("Is the Number 2 Even? ", isEven(2));

console.log("Here is my array: ", num);

var result = num.map(isEven)
console.log("Is the number even?", result);

var result = num.map(function(x){
    return x ** 0.5;
});

console.log("The squareroot of the numbers are equal to", result);
