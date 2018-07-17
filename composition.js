const fs = require('fs')
let dataString = fs.readFileSync('cookies.txt','utf8')
let dataIngredients = fs.readFileSync('ingredients.txt','utf8')
var ingredients = dataIngredients.split('\n')
var options = dataString.split('\n')
// console.log(ingredients)


class Cookie{
    constructor(ingredients,sugar){
        this.name = null
        this.status = "mentah"
        this.ingredients = ingredients
        this.has_sugar = sugar
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie{
    constructor(){
        super()
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie{
    constructor(){
        super()
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(){
        super()
        this.other_count = 150
    }
}

class Ingredient{
    constructor(options){
        this.name = options['name']
        this.amount = options['amount']
    }
}

class CookieFactory{
    static create(options){
        let cookies = []
        let bahans =[]
        let recipe = CookieFactory.getIngredients(ingredients)
        // console.log(recipe)
        for(let i = 0; i<recipe.length; i++){
            let bahan = [];
            let sugar = false ;
            let ingredientList = recipe[i].ingredients
            // console.log(ingredientList)
            for(let j = 0; j<ingredientList.length; j++){
                let ingredient = ingredientList[j]
                // console.log(ingredient)
                if(ingredient.name === 'sugar'){
                    sugar = true
                }
                bahan.push(JSON.stringify(new Ingredient(ingredient)))
            }
            bahans.push(bahan)

            if(options[i] === 'peanut butter'){
                let peanutButter = new PeanutButter
                peanutButter.name = options[i]
                peanutButter.ingredients = bahans[i]
                peanutButter.has_sugar = sugar
                cookies.push(peanutButter)
            }
            else if(options[i] === 'chocolate chip'){
                let chocolateChip = new ChocolateChip
                chocolateChip.name = options[i]
                chocolateChip.ingredients = bahans[i]
                chocolateChip.has_sugar = sugar
                cookies.push(chocolateChip)
            }else{
                let otherCookie = new OtherCookie
                otherCookie.name = options[i]
                otherCookie.ingredients = bahans[i]
                otherCookie.has_sugar = sugar
                cookies.push(otherCookie) 
            }
        }
        return cookies
        // console.log(bahans)

        // for(let i = 0; i<options.length; i++){
        // }
    }
    static cookieRecommendation(day,cookies){
        let recommendCookie = []
        if(day === 'tuesday'){
            for(let i = 0; i<cookies.length; i++){
                if(!cookies[i].has_sugar){
                    recommendCookie.push(cookies[i])
                }
            }
        }
        return recommendCookie
    }

    static getIngredients(ingredients){
        let recipe = []
        for(let i = 0; i<ingredients.length; i++){
            let obj = {}
            recipe.push(obj)
            let split = ingredients[i].split(' = ')
            // console.log(split)
            obj.name = split[0]
            // console.log(obj)
            let list = split[1].split(', ')
            // console.log(list)
            obj.ingredients = []
            for(let j = 0; j<list.length ; j++){
                let ingredient = list[j].split(' : ')
                // console.log(ingredient)
                let name = ingredient[1]
                let amount = ingredient[0]
                obj.ingredients.push({
                    name,
                    amount
                })
            }
        }
        return recipe
    }
}

let batch_of_cookies = CookieFactory.create(options) 
console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday',batch_of_cookies)
console.log("sugar free cakes are")
for(let i = 0; i<sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name)
}
// console.log(CookieFactory.getIngredients(ingredients))
