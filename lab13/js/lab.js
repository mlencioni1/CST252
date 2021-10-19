// Lab13.js - Conditionals
// We created a Goldilocks output using conditionals
// @link   img/lab11/index.html
// @file   This files defines the MyClass class.
// @author MatthewLencioni.
// @since  10.17.2021

var total = 0;

// QUESTION 1
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
  // 1-3: Baby Bear, 4-6: Mama Bear, 7-9 Papa Bear
  if (total <= 4) {fd
  $("#output").append("Baby Bear's Chair Fits You!");
} else if (total >= 8){
  $("#output").append("Papa Bear's Chair Fits You!");
  } else {
  $("#output").append("Mama Bear's Chair Fits You!");
  }
});
