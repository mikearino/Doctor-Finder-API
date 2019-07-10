import { GetDoc } from './docName.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
$(document).ready(() => {
  $("#docForm").submit((event) => {
    event.preventDefault();
    const docName = $('#name-input').val();
    const ailment = $('#ail-input').val();
    if (docName === '' || ailment === '') {
      $(".output").append('Please enter a name or illness.')
    } else {
      const output = new GetDoc();
      const promise = output.makeDoc(docName, ailment);
      promise.then((response) => {
        const body = JSON.parse(response);
        console.log(body)
        for (let i=0; i <= body.data.length; i++) {
          $(".output").append(`First Name: ${body.data[i].profile.first_name}  Last Name: ${body.data[i].profile.last_name}
            Address: ${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.city}
            Phone Number: ${body.data[i].practices[0].phones[0].number} Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients} ` );
          }
        }, (error) => {
          $(".output").text(`There was an error. ${error.message}`);
        });
      }
    });
  });
