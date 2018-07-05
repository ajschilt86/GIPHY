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

        for (var i = 0; i < 10; i++) {
          $(".gifs").append("<img class='imgSize' src='" + response.data[i].images.fixed_height.url + "'>");
          $(".gifs").append("<p> Rating: " + response.data[i].rating + "</p>");
        }        

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