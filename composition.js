const fs = require('fs');
const options = fs.readFileSync('cookies.txt').toString().split('\n');
const CookieFactory = require('./cookieFactory');
const Ingredient = require('./ingredient');

let batchOfCookies = CookieFactory.create(options);
console.log(batchOfCookies);