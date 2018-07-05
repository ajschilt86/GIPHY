$(document).ready(function () {

  var animals = ["tiger", "lion", "zebra", "rhino"];

  var userChoice = animals[0];

  //shows buttons on top//
  function renderButtons() {
    $(".buttons").empty();
    for (var i = 0; i < animals.length; i++) {
      $(".buttons").append("<button>" + animals[i] + "</button>")      
    }
    gifLoop();
  }

  renderButtons();
  function gifLoop() {
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

        for (var i = 0; i < 10; i++) {
          $(".gifs").append("<img class='imgSize' src='" + response.data[i].images.fixed_height.url + "'>");
          $(".gifs").append("<p> Rating: " + response.data[i].rating + "</p>");
        }        

      });
    });
  }

  //add animal button
  $("#add-animal").on("click", function (event) {
    event.preventDefault();

    var addAnimal = $("#animal-input").val().trim();

    animals.push(addAnimal);
    console.log(animals);
    renderButtons();
    document.forms["animal-form"].reset();
  });

});