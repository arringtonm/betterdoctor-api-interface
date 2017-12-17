
export class DoctorModule {
  constructor() {
  }

  getDoctor(search,displayResults) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${search}`)
    .then(function(response) {
      displayResults(response); })
    .fail(function(error) {
      $("#result").empty();
      $("#result").append(`<p>Failure! ${error}</p>`);
    });
  }
}
