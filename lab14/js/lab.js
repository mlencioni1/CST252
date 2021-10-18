// Lab11.js - Libraries & Intro to jQuery
// Our goal use jQuery to create a  button as well as any other fun things we can think of.
// @link   img/lab11/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  10.10.2021

//Stolen from Wes Modes (https://wmodes.github.io/cst252/lab12/index.html)
//since I don't remember going over this in class,
//it's due at 9am and its 2am, so a man has to use his resources XD.

maxFactors = 4;

outputEl = document.getElementById("output");

// get the values from the webpage and write them in an object
// this expects to have input fields with ids num0, text0, num1, text1, etc
// returns an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue);
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
        debugger;
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

// given a number and an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over the numbers and outputs the number and the matching text
// for factors
function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
        // reset output string
        var outputStr = "";
        // iterate over the factors we got from the html
        for (var factor in factorObj) {
            // check to see if this num is a multiple of factor
            if (num % factor == 0) {
                // if yes, than add the text to output string
                outputStr += factorObj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max);
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
