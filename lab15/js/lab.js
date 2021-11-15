$("#button").click(function(){
for (index = 1; index <= 200; index++) {
  var outputStr = "";

  if (index % 3 == 0){
  	outputStr += "fizz"
  };
  if (index % 5 == 0){
  	outputStr += "buzz"
  };
  if (index % 7 == 0){
  	outputStr += "boom"
  };

  if (outputStr == ""){
  	$("#output").append(index + "<br>");
  }
  else {
  	$("#output").append(outputStr + '!' + "<br>");
  }}});
