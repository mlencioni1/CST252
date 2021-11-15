// Pick an URL from the numbers API: https://icanhazdadjoke.com/api.
var targetUrl = "https://icanhazdadjoke.com/";

function doAjaxStuff() {
	// Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: targetUrl,
      // The data to send (will be converted to a query string)
      // data: { id: 123},
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      // dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      alert("Success!");
      $("#output").html(data);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
      alert("Faiure");
  });

}

// When a user clicks the button, use a jQuery AJAX call to fetch output from the numbers API
$("#activate").click(doAjaxStuff)
