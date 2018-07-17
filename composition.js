const fs = require('fs');
const options = fs.readFileSync('cookies.txt').toString().split('\n');
const CookieFactory = require('./cookieFactory');

let batchOfCookies = CookieFactory.create(options)
// console.log(batchOfCookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batchOfCookies);
console.log("sugar free cakes are :");
for(let i in sugarFreeFoods) {
  console.log(sugarFreeFoods[i]);
}