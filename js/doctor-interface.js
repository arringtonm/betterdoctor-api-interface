// import { Years } from "./../js/doctor.js";
import { apiKey } from "./../.env";


$(document).ready(function() {
  $("#lookup").submit(function(event){
    event.preventDefault();
    $("#result").text("");
    $("#result").append("<p>Searching...</p>");
    let limit = 10;
    let searchBy = $("#searchby").val();
    // let searchQuery = $("#searchquery").val();
    let searchQuery = "botox";
    let location = "or-portland";

    $("#result").append(`Searching by: ${searchBy}<br>`);
    $("#result").append(`Searching for: ${searchQuery}<br><br>`);
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${searchBy}=${searchQuery}&location=${location}&skip=0&limit=${limit}&user_key=${apiKey}`)

    .then(function(response){
      console.log(`Results: ${response.data.length}`);

      for (let i = 0; i < response.data.length; i++) {
        let profile = response.data[i].profile;
        let practices = response.data[i].practices;
        $("#result").append(`<img src="${profile.image_url}" class="provider-headshot"><div class="provider-info"><div class="provider-name">${profile.first_name} ${profile.last_name}</div><br> ${practices[0].visit_address.street}<br>${practices[0].visit_address.city}, ${practices[0].visit_address.state} ${practices[0].visit_address.zip}<br>${practices[0].phones[0].number}<br><div class="provider-bio">${profile.bio}</div></div></div>` );


      }
    }).fail(function(error) {
      $("#result").empty();
      $("#result").append(`<p>Failure! ${error}</p>`);
    });
  });
});
