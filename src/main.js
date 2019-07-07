import { GetDoc } from './docName.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#docForm").submit(function(event) {
    event.preventDefault();
    let docName = $('#name-input').val();
    console.log(docName);
    let output = new GetDoc();
    let promise = output.makeDoc();

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data[0].profile.last_name);//how to target last name
      console.log(body.data[0].practices[0].visit_address.street);//first name
      console.log(body.data[0].specialties[0].description.includes(docName));//specializes
      console.log(body.data)
      for (let i=0; i <= body.data.length; i++) {
        if (body.data[i].profile.last_name.includes(docName) || body.data[i].profile.first_name.includes(docName) || body.data[i].profile.bio.includes(docName)) {
          $(".output").append(`First Name: ${body.data[i].profile.first_name}  Last Name: ${body.data[i].profile.last_name}
            Address: ${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.city}
            Phone Number: ${body.data[i].practices[0].phones[0].number} Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}` );
        }
    }
    }, function(error) {
      $(".output").text(`There was an error! ${error.message}`);
    });

  });

});

//|| body.data[i].specialties[0].description.includes(docName)
