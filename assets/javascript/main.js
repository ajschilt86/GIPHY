$(document).ready(function () {

  var teams = ["white sox", "Yankees", "Cubs", "Cardinals"];

  var userChoice = teams[0];

  //shows buttons on top//
  function renderButtons() {
    $(".buttons").empty();
    for (var i = 0; i < teams.length; i++) {
      $(".buttons").append("<button>" + teams[i] + "</button>")
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

        for (var i = 0; i < 3; i++) {
          $(".gifs").append("<img class='imgSize' src='" + response.data[i].images.fixed_height.url + "'>");
          $(".gifs").append("<p> Rating: " + response.data[i].rating + "</p>");
          var q = 1;
        }

        //adding 10
        $(".buttons button").click(function () {
          q += 1;
          var g = q * 3;
          if (g < 25) {
            for (i; i < g; i++) {
              $(".gifs").append("<img class='imgSize' src='" + response.data[i].images.fixed_height.url + "'>");
              $(".gifs").append("<p> Rating: " + response.data[i].rating + "</p>");
            }
          }
          else {
            return false;
          }

        });
      });
    });
  }

  //add animal button
  $("#add-baseball").on("click", function (event) {
    event.preventDefault();

    var addTeam = $("#baseball-input").val().trim();
    if (addTeam === "") {
      return false;
    }
    else {
      teams.push(addTeam);
      console.log(teams);
      renderButtons();
      document.forms["baseball-form"].reset();
    }
  });
});