'use strict'

let fs = require('fs')
let options = fs.readFileSync('./cookies.txt', 'utf8').split('\n')

class CookieFactory {
  constructor(file) {
    this.status = 'mentah';
    this.menu = [];
    this.readFile();
  }

  readFile() {
    return options;
  }
  
  static create(options) {

  }
  
  bake() {
    this.status = 'selesai dimasak';
  }
  
  
}

let ruti = new CookieFactory('cookies.txt');

// console.log(ruti.readFile());
let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);

