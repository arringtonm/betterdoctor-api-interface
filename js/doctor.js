

export class DoctorModule {
  constructor() {

  }

  getDoctor(search,displayResults) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${search}`)
    .then(function(displayResults(response){
      //
      // if (response.data.length === 0) {
      //   $("#result").append("<p>No providers found. Please try refining your search");
      // } else {
      //   $("#result").append(`<p>${response.data.length} providers found</p><br>`);
      // }
      //
      //
      //
      // for (let i = 0; i < response.data.length; i++) {
      //   let profile = response.data[i].profile;
      //   let practices = response.data[i].practices;
      //   let url = response.data[i].practices[0].website;
      //   let title = profile.title;
      //   let patients = response.data[i].practices[0].accepts_new_patients;
      //
      //   if (url === undefined) {
      //     url = "(No website listed)";
      //   } else {
      //     url = `<a href="${url}">Website</a>`;
      //   }
      //
      //   if (title === undefined) {
      //     title = "";
      //   } else {
      //     title = `, ${title}`;
      //   }
      //
      //   if (patients === true) {
      //     patients = "Accepts new patients";
      //   } else {
      //     patients = "Does not accept new patients";
      //   }
      //
      //   $("#result").append(`<div class="provider-card"><div class="provider-top"><div class="provider-headshot-holder"><img src="${profile.image_url}" class="provider-headshot"></div><div class="provider-info"><div class="provider-name">${profile.first_name} ${profile.last_name}${title}</div><div class="provider-website">${url}</div><br>${practices[0].visit_address.street}<br>${practices[0].visit_address.city}, ${practices[0].visit_address.state} ${practices[0].visit_address.zip}<br>${practices[0].phones[0].number}<br>${patients}</div><br></div><div class="provider-bio">${profile.bio}</div></div></div>`);
      // }
    }).fail(function(error) {
      $("#result").empty();
      $("#result").append(`<p>Failure! ${error}</p>`);
    });
  });
}

// export class DoctorModule { }
