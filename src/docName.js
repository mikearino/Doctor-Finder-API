export class GetDoc {

  makeDoc() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = process.env.API_KEY;
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
