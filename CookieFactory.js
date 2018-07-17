const fs = require('fs');
const PeanutButter = require('./PeanutButter.js');
const ChocholateChip = require('./ChocholateChip.js');
const OtherCookie = require('./OtherCookie.js');

class CookieFactory {
    constructor() {

    }
    
    static create(options) {
        let optionsArr = options.split('\n');

        let tmp = [];       
        for(let i = 0; i < optionsArr.length; i++) {
            if(optionsArr[i] == 'peanut butter') {
                let kue = new PeanutButter();
                kue.name = optionsArr[i];
                tmp.push(kue);
            } else if(optionsArr[i] == 'chocholate chip') {
                let kue = new ChocholateChip();
                kue.name = optionsArr[i];
                tmp.push(kue);
            } else {
                let kue = new OtherCookie();
                kue.name = optionsArr[i];
                tmp.push(kue);
            }
        }
        return tmp
    }
}

let options = fs.readFileSync('./cookies.txt', 'utf8');
let batch_of_cookies = CookieFactory.create(options);
// let batch_of_cookies = new CookieFactory();
console.log(batch_of_cookies);
// console.log(options);