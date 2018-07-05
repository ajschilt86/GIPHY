$(document).ready(function () {

  var cities = ["Chicago", "Dallas", "Detroit", "New York"];

  var userChoice = cities[0];
  var userChoice1 = cities[0];

  //shows buttons on top//
  function renderButtons() {
    $(".buttons").empty();
    for (var i = 0; i < cities.length; i++) {
      $(".buttons").append("<button>" + cities[i] + "</button>")
    }
    gifLoop();
  }

  renderButtons();
  function gifLoop() {
    $(".buttons button").click(function () {
      userChoice = $(this).text();
      console.log(userChoice);
      $(".weather").empty();

      

      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userChoice + "&appid=fe5914c4414cd46e28151371a9f99652";
           


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.table(response);

        var Fahrenheit = Math.round(response.main.temp - 273.15) * 1.80 +32;
        $(".weather").append("<div class='cityName'>" + userChoice + "</div");
        $(".weather").append("<div class='stats'>Temperature: " + Fahrenheit + "</div>");
        $(".weather").append("<div class='stats'>Humidity: " + response.main.humidity + "</div>");
        $(".weather").append("<div class='stats'>Latitude: " + response.coord.lat + "</div>");
        $(".weather").append("<div class='stats'>Longitude: " + response.coord.lon + "</div>");
        $(".weather").append("<div class='stats'>Weather: " + response.weather[0].main + "</div>");



      });

    

    });  

  }

  
  //add animal button
  $("#add-city").on("click", function (event) {
    event.preventDefault();

    var addTeam = $("#city-input").val().trim();

    cities.push(addTeam);
    console.log(cities);
    renderButtons();
    document.forms["city-form"].reset();
  });

});