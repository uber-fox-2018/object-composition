const fs = require('fs')
const CookieFactory = require('./cookie_factory')
let option = fs.readFileSync('cookies.txt', 'utf-8').split('\n')
let ingredient = fs.readFileSync('ingredient.txt', 'utf-8').split('\n')
let batch_of_cookies = CookieFactory.create(option, ingredient)

console.log(batch_of_cookies)