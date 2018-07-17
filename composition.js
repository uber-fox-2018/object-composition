const fs = require(`fs`)
var option = fs.readFileSync(`./cookies.txt`,`utf8`)

class Cookie {
    constructor(name,arringredients) {
        this.name = name
        this.status = `mentah`
        this.ingredients = Ingredients.breaker(arringredients)
    }
    bake() {
        this.status = `selesai dimasak`
    }
}
class PeanutButter extends Cookie{
    constructor(name,ingredients) {
        super(name,ingredients)
        this.peanut_count = 100
    }
}
class ChocolateChip extends Cookie{
    constructor(name,ingredients) {
        super(name,ingredients)
        this.choc_chip_count = 200
    }
}
class OtherCookie extends Cookie{
    constructor(name,ingredients) {
        super(name,ingredients)
        this.other_count = 150
    }
}

class CookieFactory {
    constructor() {
        this.list = []
    }
    static create(option) {
        let res = []
        let arr = option.split(`\n`)
        let arrRecipeName = []
        let arrIngridients = [] 
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].split(`=`)[0] === `peanut butter`) {
                arrIngridients.push(arr[i].split(`=`)[1].split(','))
                arrRecipeName.push(arr[i].split(`=`)[0])
            } else if (arr[i].split(`=`)[0] === `chocolate chip`) {
                arrIngridients.push(arr[i].split(`=`)[1].split(','))
                arrRecipeName.push(arr[i].split(`=`)[0])
            } else {
                arrIngridients.push(arr[i].split(`=`)[1].split(','))
                arrRecipeName.push(arr[i].split(`=`)[0])
            }
        }

        for (let i = 0; i < arrRecipeName.length; i++) {
            if (arrRecipeName[i].name === `peanut butter`) {
                let peanut = new PeanutButter(arrRecipeName[i],Ingredients.breaker(arrIngridients[i]))
                res.push(peanut)
            } else if (arrRecipeName[i].name === `chocolate chip`) {
                let chochip = new ChocolateChip(arrRecipeName[i],Ingredients.breaker(arrIngridients[i]))
                res.push(chochip)
            } else {
                let other = new OtherCookie(arrRecipeName[i],arrIngridients[i])
                res.push(other)
            }
        }
        return res
    }
    static cookieRecommendation(day, batchOfCookie) {
        let res = []
        
        for (let i = 0; i < batchOfCookie.length; i++) {
            let sugar = false
            for (let j = 0; j < batchOfCookie[i].ingredients.length; j++) {
                if (batchOfCookie[i].ingredients[j].name === `sugar`) {
                    
                    sugar = true
                }
            }
            if (sugar === false) {
                res.push(batchOfCookie[i])
            }
        }

        return res
    }
}

class Ingredients {
    constructor (option) {
        this.name = option.split(`:`)[1]
        this.amount = option.split(`:`)[0]
    }
    static breaker(arr) {
        let recipe = []

        for (let j = 0; j < arr.length; j++) {
            let temp  = {}
                temp.name = arr[j].split(`:`)[1].slice(1),
                temp.amount = arr[j].split(`:`)[0]
            
            recipe.push(temp)
        }
        return recipe
    }
}


let batchOfCookie = CookieFactory.create(option)
batchOfCookie
console.log(batchOfCookie)

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batchOfCookie);
console.log("sugar free cakes are :");

for(let i = 0; i < sugarFreeFoods.length; i++){
  console.log(sugarFreeFoods[i].name);
}