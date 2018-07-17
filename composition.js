const fs = require('fs')

class Cookie {
    constructor(name){
        this.name = name
        this.ingredients = []
        this.status = 'mentah'
    }

    bake(){
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie {
    constructor(){
        super('peanut butter')
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(){
        super('chocolate chip')
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name){
        super(name)
        this.other_count = 150
    }
}

class Ingredient {
    constructor(ingredient){
        this.ingredient = ingredient
    }
}

class CookieFactory {
    static create(options,ingredients) {
        let dataCookie = fs.readFileSync(options,'utf8').split('\n')
        let cookies = []
        let cookie = ''

        for (let i = 0; i < dataCookie.length; i++) {
            if (dataCookie[i] === 'peanut butter') {
              cookie = new PeanutButter()  
            }else if (dataCookie[i] === 'chocolate chip') {
              cookie = new ChocolateChip()
            }else {
              cookie = new OtherCookie(dataCookie[i])
            }
            cookies.push(cookie)
        }
        
        let recipe = CookieFactory.getIngredients(ingredients)
        // console.log(recipe);

        for (let i = 0; i < cookies.length; i++) {
            for (let j = 0; j < recipe.length; j++) {
                if (cookies[i].name === recipe[j][0]) {
                    let bahan = new Ingredient(recipe[j][1])
                    cookies[i].ingredients.push(bahan)
                }
            }
        }
        // console.log(cookies[0].ingredients);
        
        return cookies
    }

    static getIngredients(ingredients){
        let dataIngredients = fs.readFileSync(ingredients,'utf8').split('\n')
        let array = []
        
        for (let i = 0; i < dataIngredients.length; i++) {
            let splitData = dataIngredients[i].split('=')
            array.push(splitData)
        }
        return array
    }
}

console.log(CookieFactory.create('./cookies.txt','./ingredients.txt'))