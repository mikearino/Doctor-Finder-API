export class GetDoc {

  makeDoc(docName, ailment) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${ailment}&location=or-portland&skip=0&limit=10&user_key=`
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
