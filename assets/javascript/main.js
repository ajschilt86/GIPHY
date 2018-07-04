$(document).ready(function () {




  

  var animals = ["tiger", "lion", "zebra", "rhino"];

  var userChoice = animals[0];


  for (var i = 0; i < animals.length; i++) {

    $(".buttons").append("<button>" + animals[i] + "</button>")

  }  


  $(".buttons button").click(function () {
    userChoice = $(this).text();
    console.log(userChoice);
    $(".gifs").empty();

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userChoice + "&api_key=tnF75nCvZOzJEAnV6pFNBwlI8svFoFFN";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.table(response);


      for (var i = 0; i < 6; i++) {
        
        $(".gifs").append("<img src='" + response.data[i].images.fixed_height.url + "'>")
      }

    });
  });





});