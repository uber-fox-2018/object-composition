const CookieModule = require('./cookie');
const Ingredient = CookieModule.Ingredient;
const PeanutButter = CookieModule.PeanutButter;
const ChocolateChip = CookieModule.ChocolateChip;
const PeanutButterCrumbled = CookieModule.PeanutButterCrumbled;
const ChocolateChipCrumbled = CookieModule.ChocolateChipCrumbled;
const OtherCookie = CookieModule.OtherCookie;

class CookieFactory {
    static create(recipes) {
        let ingredients, cookies = [];
        recipes.forEach(recipe => {
            ingredients = [];
            recipe.options.forEach(option => 
                ingredients.push(new Ingredient(option))
            );
            switch (recipe.name) {
                case "peanut butter":
                    cookies.push(new PeanutButter(recipe.name, ingredients));
                    break;
                case "chocolate chip":
                    cookies.push(new ChocolateChip(recipe.name, ingredients));
                    break;
                case "peanut butter crumbled":
                    cookies.push(new PeanutButterCrumbled(recipe.name, ingredients));
                    break;
                case "chocolate chip crumbled":
                    cookies.push(new ChocolateChipCrumbled(recipe.name,ingredients));
                    break;
                default:
                    cookies.push(new OtherCookie(recipe.name, ingredients));
                    break;
            }
        });
        return cookies;
    }

    static cookieRecommendation(option, batch_of_cookies) {
        if(option.toLowerCase() === 'tuesday') {
            let filtered = [];
            batch_of_cookies.forEach(cookie => {
                if(!cookie.has_sugar) filtered.push(cookie);
            })
            return filtered;
        }
        return batch_of_cookies;
    }
}

module.exports = CookieFactory;