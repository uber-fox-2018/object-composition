const RecipeParser = require('./recipe_parser');
const CookieFactory = require('./cookie_factory');
let recipes = RecipeParser.parseFile('./cookies.txt');
let batch_of_cookies = CookieFactory.create(recipes);
let sugarFreeFoods = CookieFactory.cookieRecommendation('Tuesday', batch_of_cookies);
batch_of_cookies.forEach(item => {
    console.log(item);
});
console.log('sugar free cookies are:')
sugarFreeFoods.forEach(item => {
    console.log(item.name);
});