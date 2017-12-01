// import { Years } from "./../js/doctor.js";
import { apiKey } from "./../.env";


$(document).ready(function() {
  $("#lookup").submit(function(event){
    event.preventDefault();
    $("#result").append("<p>Searching...</p>");
    let limit = 10;
    let searchBy = "query";
    let searchQuery = $("#searchquery").val();
    console.log(searchQuery);
    // $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${searchBy}=${searchQuery}&location=or-portland&skip=0&limit=${limit}&user_key=${apiKey}`)
    // .then(function(response){
    //   $("#result").empty();
    //   console.log(response.data);
    //   // $("#result").append(response.data.practices);
    // }).fail(function(error) {
    //   $("#result").empty();
    //   $("#result").append("<p>Failure</p>");
    // });
  });
});
