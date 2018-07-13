$(document).ready(function () {

  var teams = ["White Sox", "Yankees", "Cubs", "Cardinals", "Mets", "Astros"];

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

        for (var i = 0; i < 5; i++) {
          $(".gifs").append("<div class='gifRating'>Rating: " + response.data[i].rating + "</div>");
          $(".gifs").append("<div><img src='" + response.data[i].images.fixed_height_still.url + "' data-still='" + response.data[i].images.fixed_height_still.url + "' data-animate='" + response.data[i].images.fixed_height.url + "' data-state='still' class='imgSize'></div>");

          var q = 1;
        }
        $(".imgSize").click(function () {
          var state = $(this).attr("data-state");
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
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