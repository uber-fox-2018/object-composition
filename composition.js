"use strict"

 //menyimpan informasi tentang resep yg mencakup nama bahan dan jmlahnya
class Ingredient {
    constructor(options){
        this.name = options['name']
        this.amount = options['amount']

    }        
}

class Cookie {
    constructor(name,ingredients){
        this.name = name
        this.status = "mentah"
        this.ingredients = ingredients
        this.has_sugar = null
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie {
    constructor(ingredients){
        super("peanut butter", ingredients)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie {
    constructor(ingredients){
        super("chocolate chip", ingredients)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name, ingredients){
        super(name, ingredients)
        this.other_count = 150
    }
}

class CookieFactory{
    static create(options){
        let lists = options.split('\n');
        let results = [];
        for(let list of lists){
            let cookie=list.split(" = ");
            if(cookie[0] === "peanut butter"){
                results.push(new PeanutButter(this.parsingIngredients(cookie[1]).map(x => new Ingredient(x))));
            }else if(cookie[0] === "chocolate chip"){
                results.push(new ChocholateChip(this.parsingIngredients(cookie[1]).map(x => new Ingredient(x))));
            }else if(cookie[0]!==""){
                results.push(new OtherCookie(cookie[0],this.parsingIngredients(cookie[1]).map(x => new Ingredient(x))));
            }
        }
        return results;
    }

    static parsingIngredients(lists){
        lists=lists.split(", ");
        let result=[];
        for(var list of lists){
            let obj={};
            let details = list.split(" : ");
            obj.name=details[1];
            obj.amount=details[0];
            result.push(obj);
        }
       return result;
    }

    static cookieRecommendation(day, batch_of_cookies){
        let result =[];
        if(day==="tuesday"){
            for(let cookie of batch_of_cookies){
                let isSugarFound = false;
               for(let ingredient of cookie.ingredients){
                    if(ingredient.name === "sugar"){
                        isSugarFound = true;
                    }
               }
               if(isSugarFound === false){
                   result.push(cookie);
               }
            }
        }
        return result;
    }
}

let fs = require('fs');
let options = fs.readFileSync('./cookies.txt', 'utf8');
let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are :");
for(let i = 0 ; i< sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name);
}

