"use strict"
const fs = require('fs');
const options = fs.readFileSync('ingredients.txt', 'utf8').split('\n');

class Cookie {
    constructor(name, ingredients) {
        this.name = name;
        this.status = 'mentah';
        this.ingredients = ingredients;
        this.has_sugar = null;
    }

    bake() {
        this.status = 'selesai dimasak';
    }
}

class PeanutButter extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.other_count = 150;
    }
}


class Ingredient {
    constructor(options) {
        this.name = options['name'];
        this.amount = options['amount'];
    }
}

class CookieFactory {
    static create(options) {
        let output = [];
        for (let i = 0; i < options.length; i++) {
            let cookiesName = CookieFactory.getCookieName(options)[i].trim();
            // console.log('===', cookiesName);
            let cookiesIngredients = CookieFactory.getIngredients(options)[i];
            if (cookiesName === 'peanut butter') {
                var cookies = new PeanutButter(cookiesName, cookiesIngredients);

            } else if (cookiesName === 'chocolate chip') {
                var cookies = new ChocolateChip(cookiesName, cookiesIngredients);

            } else {
                var cookies = new OtherCookie(cookiesName, cookiesIngredients);
                
            }
            output.push(cookies);
        }
        return output;
    }

    static getCookieName(options) {
        let cookiesName = [];
        for (let i = 0; i < options.length; i++) {
            cookiesName.push(options[i].split('=')[0]);
        }
        // console.log('--->', cookiesName);
        return cookiesName;
    }

    static getRecipe(options) {
        let cookieRecipe = [];
        for (let i = 0; i < options.length; i++) {
            cookieRecipe.push(options[i].split('=')[1]);
        }
        // console.log('>>>', cookieRecipe);
        return cookieRecipe;
    }

    static getIngredients(options) {
        let cookieIngredients = [];
        for (var i = 0; i < options.length; i++) {
            cookieIngredients.push(options[i].split('=')[1].split(', '));
        }
        let ingredientComponents = [];
        for (let j = 0; j < cookieIngredients.length; j++) {
            let eachComponent = [];
            for (let k = 0; k < cookieIngredients[j].length; k++) {
                eachComponent.push(cookieIngredients[j][k].split(':')[1].trim());
            }
            ingredientComponents.push(eachComponent);
        }
        // console.log('---', ingredientComponents);
        return ingredientComponents;
    }

    static cookieRecommendation(day, batch) {
        let cookiesName = CookieFactory.getCookieName(options);
        // console.log('===', cookiesName);
        let sugarlessCookie = [];
        if (day === 'tuesday') {
            for (let i = 0; i < batch.length; i++) {
                // console.log('----->', batch[i]);
                let eachIngredient = CookieFactory.getIngredients(options)[i];
                // console.log('.....', eachIngredient)
                let containSugar = false;
                for (let j = 0; j < eachIngredient.length; j++) {
                    // console.log('>', eachIngredient[j]);
                    if(eachIngredient[j] === 'sugar') {
                        containSugar = true;
                    }
                }
                if (containSugar === false) {
                    sugarlessCookie.push(cookiesName[i]);
                }
            }
        }
        return sugarlessCookie;
    }
}   

let bactch_of_cookies = CookieFactory.create(options);
console.log(bactch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', bactch_of_cookies);
console.log('sugar free cookies are:');
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i]);
}