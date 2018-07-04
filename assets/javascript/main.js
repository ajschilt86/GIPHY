$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.table(response);
   

   
    $(".results").html("<div>Title: " + response.Title + "</div>")
    $(".results").append("<div>Year: " + response.Year + "</div>")
    $(".results").append("<div>Rating: " + response.Year + "</div>")
    $(".results").append("<div>Plot: " + response.Plot + "</div>")
    $(".results").append("<img src='" + response.Poster + "'>")

  });

