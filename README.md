# Doctor Lookup 7/5/2019

#### A webpage for finding doctors in the Portland metro area.

#### By **Mike Lofgren**

## Description

A webpage created with jQuery, Javascript, CSS and HTML to help users find a doctor in the Portland metro area.
A user can enter a medical issue to receive a list of doctors in the Portland area.

### Specs
| Spec                                    | Input                            | Output                                    |
| :---------------------------------------| :------------------------------- | :---------------------------------------- |
| User does not input anything, it returns all doctors unsorted | " "        | Please enter a name or illness.                                 |
| User inputs a name or illness not in the database| Skateboard              | Your search did not return any results.   |
| User has invalid API call                 |Bad API key                     | There was an error.                       |
| User inputs issue to receive a list of doctors for a medical condition.  |Flu  |Providers names                        |
| User inputs a name to receive a list of doctors names in the area.     | Williams |Mike Williams, Mary Williams...     |
| User receives information on doctors if the results match| Dr. Brule |First name, last name, address, phone number, website and whether or not the doctor is accepting new patients|
| If user inputs a search that does not match any search it returns a statement saying no doctors found        |Hulk Hogan                       | Sorry no doctors found.                           |

## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Enter in the command $ NPM install from terminal in projects root directory.
3. Paste an api key from Better Doctor in to the docName.js variable named url.
4. Paste in your API key following the previous line.
5. Enter in the command $ NPM run start from terminal in projects root directory.
6. Type in an input or illness to find a doctor.
7. The bootstrap file should be under "css" folder of project and jQuery file should be under "js" directory.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact mikeylofgren@gmail.com

### License

*This software is licensed under the MIT license*

Copyright (c) 2019 **Mike Lofgren**
