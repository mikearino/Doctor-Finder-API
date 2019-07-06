import { GetInsult } from './insult.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#docForm").submit(function(event) {
    event.preventDefault();
    let docName = $('#name-input').val();
    console.log(docName);
    let output = new GetInsult();
    let promise = output.makeInsult();

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data[0].profile.last_name);//how to target last name
      console.log(body.data[0].practices[0].visit_address.street)
      for (let i=0; i <= body.data.length; i++) {
        if (body.data[i].profile.last_name.includes(docName) || body.data[i].profile.first_name.includes(docName)) {
          docArray.push(body.data[i]);
          console.log(docArray);
          $(".output").append(`First name: ${body.data[i].profile.first_name}  Last name: ${body.data[i].profile.last_name}
            Address: ${body.data[0].practices[0].visit_address.street}` );
        }
        let docArray = [];
    }
    }, function(error) {
      $(".output").text(`There was an error! ${error.message}`);
    });

  });

});
