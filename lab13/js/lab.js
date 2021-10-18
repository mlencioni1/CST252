// Lab13.js - Conditionals
// We created a Goldilocks output using conditionals
// @link   img/lab11/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  10.17.2021


// QUESTION 1
$("#question1")
$("#quiet").click(function(){
  $("#leveled").hide();
  $("#loud").hide();
  var n = $("#quiet").val(1) ;
});
$("#leveled").click(function(){
  $("#quiet").hide();
  $("#loud").hide();
  var n = $("#leveled").val(2);
});
$("#loud").click(function(){
  $("#leveled").hide();
  $("#quiet").hide();
  $("#loud").val(3);
});

//QUESTION 2
$("#snack").click(function(){
  $("#snack").val(1);
  $("#plate").hide();
  $("#seconds").hide();
});
$("#plate").click(function(){
  $("#plate").val(2);
  $("#snack").hide();
  $("#seconds").hide();
});
$("#seconds").click(function(){
  $("#seconds").val(3);
  $("#snack").hide();
  $("#plate").hide();
});

// Question 3
$("#middle").click(function(){
  $("#middle").val(1);
  $("#firm").hide();
  $("#soft").hide();
});
$("#soft").click(function(){
  $("#soft").val(2);
  $("#firm").hide();
  $("#middle").hide();
});
$("#firm").click(function(){
  $("#firm").val(3);
  $("#soft").hide();
  $("#middle").hide();
});

//Combine answers to get sum value


// final output
$("#final").click(function(){
  $("#output").empty();
  // 1-3: Baby Bear, 4-6: Mama Bear, 7-9 Papa Bear
  if (sum < 3) {
  $("#output").append("Baby Bear's Chair Fits You!");
  } else if (sum > 7){
  $("#output").append("Papa Bear's Chair Fits You!");
  } else {
  $("#output").append("Mama Bear's Chair Fits You!");
  }
});
