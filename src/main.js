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
      for (let i=0; i <= body.data.length; i++) {
        if (body.data[i].profile.last_name.includes(docName) || body.data[i].profile.first_name.includes(docName)) {
          docArray.push(body.data[i]);
          console.log(docArray);

        }
        let docArray = [];
    }
      $(".output").text(body.insult);
    }, function(error) {
      $(".output").text(`There was an error! ${error.message}`);
    });

  });

});
