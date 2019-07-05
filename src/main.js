import { GetInsult } from './insult.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#docForm").submit(function(event) {
    event.preventDefault();

    let output = new GetInsult();
    let promise = output.makeInsult();

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.insult);
      console.log(body.data[0]);
      $(".output").text(body.insult);
    }, function(error) {
      $(".output").text(`There was an error you dungul! ${error.message}`);
    });

  });

});
