"use strict"

var fs = require('fs')
var options = fs.readFileSync('cookies.txt')
    .toString()
    .split("\r\n")

var parsingResult= parsingTextCookie(options)  
    
function parsingTextCookie(options) {
    var result=[]
    var ingredientPerCookie
 
    options.forEach(item => {
        var separateNameAndIngredients= item.split('=')
        ingredientPerCookie= parsingIngredients(separateNameAndIngredients[1])
        var namePerCookie= separateNameAndIngredients[0]

        var wrapping={}
        wrapping.name= namePerCookie
        wrapping.options= ingredientPerCookie
        result.push(wrapping)
    })
    
    return result
}
//console.log (parsingTextCookie(options)[0])


function parsingIngredients(line){
    
    var separateIngredients= line.split(',')
    var result=[]

    separateIngredients.forEach(item =>{
        result.push(parsingIngredient(item))
    }) 
    return result
}

function parsingIngredient (ingredientStr) {
    var separateIngredientsNameAndAmount= ingredientStr.split(':')
    return {
    'name': separateIngredientsNameAndAmount[1], 
    'amount': separateIngredientsNameAndAmount[0]
    }
}





//============================================================================//

class Ingredient {
    constructor(options) {
        this.name= options['name']
        this.amount= options['amount']
    }
}


class Cookie {
    constructor(ingredients) {
        this.name
        this.status= 'mentah'
        this.ingredients= ingredients
        this.has_sugar=null

    }

    bake() {
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie {
    constructor() {
        super()
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor() {
        super()
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor() {
        super()
        this.other_count= 150
    }
}


//=========================================================================//


class CookieFactory {
    static create(options){
        var result= []
        

        for (let i=0; i<options.length; i++){
            var ingredients=[]
            options[i]['options'].forEach(item =>{
                let ingredient = new Ingredient(item)
                ingredients.push(ingredient)

            })
            if (options[i]['name']=='peanut butter') {
                let peanut_butter= new PeanutButter()
                peanut_butter.name= options[i]['name']
                peanut_butter.ingredients= ingredients
                result.push(peanut_butter)
            }

            else if (options[i]['name']=='chocolate chip') {
                let chocolate_chip= new ChocolateChip()
                chocolate_chip.name= options[i]['name']
                chocolate_chip.ingredients= ingredients
                result.push(chocolate_chip)
            }
            
            else {
                let other_cookie= new OtherCookie()
                other_cookie.name= options[i]['name']
                other_cookie.ingredients= ingredients
                result.push(other_cookie)
            }
        }
        return result
    }
}

let batch_of_cookies = CookieFactory.create(parsingResult)
console.log(batch_of_cookies)

/*
let sugarFreeFoods= CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)
console.log('sugar free cakes are : ')
for (let i= 0; i<sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}
*/