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
      console.log(body.data[0].profile.last_name)//how to target last name
      for (let i=0; i <= body.data.length; i++) {
        let newArray = []
        if (body.data[i].profile.last_name.includes("R") || body.data[i].profile.first_name.includes("R")) {
          newArray.push(body.data[i])
          console.log(newArray)

        }
    }
      $(".output").text(body.insult);
    }, function(error) {
      $(".output").text(`There was an error you dungul! ${error.message}`);
    });

  });

});
