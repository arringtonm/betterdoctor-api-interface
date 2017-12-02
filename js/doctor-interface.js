// import { Years } from "./../js/doctor.js";
import { apiKey } from "./../.env";


$(document).ready(function() {
  $("#lookup").submit(function(event){
    event.preventDefault();
    $("#result").text("");
    let limit = 100;
    let searchBy = $("#searchby").val();
    let searchQuery = $("#searchquery").val();
    if (searchQuery === undefined) {
      $("#result").append(`Please enter a search term`);
      return;
    }
    let location = "or-portland";
    $("#result").append(`<span class="searching">Searching for providers by <span class="searching-bold">${searchQuery}</span>...</span><br><br>`);
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${searchBy}=${searchQuery}&location=${location}&skip=0&limit=${limit}&user_key=${apiKey}`)
    .then(function(response){
      for (let i = 0; i < response.data.length; i++) {
        let profile = response.data[i].profile;
        let practices = response.data[i].practices;
        let url = response.data[i].practices[0].website;
        if (url === undefined) {
          url = "(No website listed)";
        } else {
          url = `<a href="${url}">Website</a>`;
        }
        $("#result").append(`<div class="provider-card"><div class="provider-top"><div class="provider-headshot-holder"><img src="${profile.image_url}" class="provider-headshot"></div><div class="provider-info"><div class="provider-name">${profile.first_name} ${profile.last_name}</div><div class="provider-website">${url}</div><br>${practices[0].visit_address.street}<br>${practices[0].visit_address.city}, ${practices[0].visit_address.state} ${practices[0].visit_address.zip}<br>${practices[0].phones[0].number}</div><br></div><div class="provider-bio">${profile.bio}</div></div></div>`);
      }
    }).fail(function(error) {
      $("#result").empty();
      $("#result").append(`<p>Failure! ${error}</p>`);
    });
  });
});
