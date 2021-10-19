// Lab13.js - Conditionals
// We created a Goldilocks output using conditionals
// @link   img/lab11/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  10.17.2021

var total = 0;

// QUESTION 1
//on button click:
//  Hide other options
//  Add value to total
//  disable button from multiple clicks
$("#quiet").click(function(){
  $("#leveled").hide();
  $("#loud").hide();
  total += 1;
  $("#quiet").attr('disable', true);
});
$("#leveled").click(function(){
  $("#quiet").hide();
  $("#loud").hide();
  total += 2;
  $("#leveled").attr('disable', true);
});
$("#loud").click(function(){
  $("#leveled").hide();
  $("#quiet").hide();
  total += 3;
  $("#loud").attr('disable', true);
});

//QUESTION 2
//on button click:
//  Hide other options
//  Add value to total
//  disable button from multiple clicks
$("#snack").click(function(){
  $("#plate").hide();
  $("#seconds").hide();
  total += 1;
  $("#snack").attr('disable', true);
});
$("#plate").click(function(){
  $("#snack").hide();
  $("#seconds").hide();
  total += 2;
  $("#plate").attr('disable', true);
});
$("#seconds").click(function(){
  $("#snack").hide();
  $("#plate").hide();
  total += 3;
  $("#seconds").attr('disable', true);
});

// Question 3
//on button click:
//  Hide other options
//  Add value to total
//  disable button from multiple clicks
$("#middle").click(function(){
  $("#firm").hide();
  $("#soft").hide();
  total += 1;
  $("#middle").attr('disable', true);
});
$("#soft").click(function(){
  $("#firm").hide();
  $("#middle").hide();
  total += 2;
  $("#soft").attr('disable', true);
});
$("#firm").click(function(){
  $("#soft").hide();
  $("#middle").hide();
  total += 3;
  $("#firm").attr('disable', true);
});

//Combine answers to get sum value

// final output
$("#final").click(function(){
  $("#output").empty();
  //I wanted the chances of choice to be balanced
  //  3 questions = 3 minimum, 9 maximum total output
  //    3 has 1 combinations
  //    4 has 3 combinations
  //    5 has 3 combinations
  //    6 has 6 combinations
  //    7 has 3 combinations
  //    8 has 3 combinations
  //    9 has 1 combinations

  if (total <= 4) {
  $("#output").append("Baby Bear's Chair Fits You!");
  // 3-4: Baby Bear (4 combinations) since baby bear is smallest it should get
  //      the least chance of getting picked.
} else if (total >= 7){
  $("#output").append("Papa Bear's Chair Fits You!");
  // 5-6: Mama Bear (9 combinations) since mama bear is more moderate, shes
  //      most average therefore gets the highest chance of being picked.
  } else {
  $("#output").append("Mama Bear's Chair Fits You!");
  // 7-9: Papa Bear (7 combinations) since papa bear is on the high end, and
  //      is more likely to be related to than baby bear his chances are in the middle.
  }
});
