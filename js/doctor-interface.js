import { apiKey } from "./../.env";
import { DoctorModule } from './../js/doctor.js';


var displayResults = function(response) {
  console.log("hi");
  if (response.data.length === 0) {
    $("#result").append("<p>No providers found. Please try refining your search");
  } else {
    $("#result").append(`<p>${response.data.length} providers found</p><br>`);
  }

  for (let i = 0; i < response.data.length; i++) {
    let profile = response.data[i].profile;
    let practices = response.data[i].practices;
    let url = response.data[i].practices[0].website;
    let title = profile.title;
    let patients = response.data[i].practices[0].accepts_new_patients;

    if (url === undefined) {
      url = "(No website listed)";
    } else {
      url = `<a href="${url}">Website</a>`;
    }

    if (title === undefined) {
      title = "";
    } else {
      title = `, ${title}`;
    }

    if (patients === true) {
      patients = "Accepts new patients";
    } else {
      patients = "Does not accept new patients";
    }

    $("#result").append(`<div class="provider-card"><div class="provider-top"><div class="provider-headshot-holder"><img src="${profile.image_url}" class="provider-headshot"></div><div class="provider-info"><div class="provider-name">${profile.first_name} ${profile.last_name}${title}</div><div class="provider-website">${url}</div><br>${practices[0].visit_address.street}<br>${practices[0].visit_address.city}, ${practices[0].visit_address.state} ${practices[0].visit_address.zip}<br>${practices[0].phones[0].number}<br>${patients}</div><br></div><div class="provider-bio">${profile.bio}</div></div></div>`
  );
  }
};

$(document).ready(function() {

  var docSearch = new DoctorModule();

  $("#lookup").submit(function(event){
    event.preventDefault();
    $("#result").text("");
    $("#result").show();
    let limit = $("#searchnum").val();
    let searchBy = $("#searchby").val();
    let searchQuery = $("#searchquery").val();
    if (searchQuery === undefined) {
      $("#result").append(`Please enter a search term`);
      return;
    }
    let location = "or-portland";
    let searchString = `${searchBy}=${searchQuery}&location=${location}&skip=0&limit=${limit}&user_key=${apiKey}`;

    docSearch.getDoctor(searchString);


    $("#result").append(`<span class="searching">Searching for providers by <span class="searching-bold">${searchQuery}</span>...</span><br><br>`);


  });
});
