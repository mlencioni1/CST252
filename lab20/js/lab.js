/**
 * Author:    Matthew Lencioni
 * Created:   11.27.2021
 *
 * Goal: To use JSON and APIs to display a comic from an internet API.
 **/

 var targetUrl = "https://xkcd.com/info.0.json";

 function doAjaxStuff() {
 	// Using the core $.ajax() method
   $.ajax({
       // The URL for the request
       url: targetUrl,
       // The data to send (will be converted to a query string)
       type: "GET",

       mode: 'cors',

       headers: {'Access-Control-Allow-Origin':'*'}

   })
   // If the request succeeds
   .done(function( data ) {

     var title = data.title;
     var image = data.img;
     var alt = data.alt;

       $("#output").html("title: " + data.title + "<br> image:");
   })
   // If the request fails
   .fail(function( xhr, status, errorThrown ) {
       console.log(errorThrown + " Status:" + status );
       alert("Failure");
   });

 }

 // When a user clicks the button, use a jQuery AJAX call to fetch output from the numbers API
 $("#activate").click(doAjaxStuff)
