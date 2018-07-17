"use strict"
class Ingredient {
    constructor(option){
        this.name = option['name']
        this.amount = option['amount']
    }
}
class Cookie {
    constructor(ingredients){
        this.ingredients = ingredients
        this.has_sugar = null
    }
}

