"use strict"
const fs = require('fs')

class Cookie {
  constructor(name) {
    this.name = name
    this.status = "mentah"
    this.ingredients = []
  }

  bake() {
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(name) {
    super(name)
    this.peanut_count = 100
  }
}

class ChocholateChip extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 150
    }
}

class CookieFactory {
    static create(options){
      // accepts a list of cookie types and returns those cookies
        let optionsJoin = options.split('\n')
        let containArrCookies = []
        for(let i = 0; i < optionsJoin.length; i++) {
            if(optionsJoin[i] === 'peanut butter') {
                containArrCookies.push(new PeanutButter(optionsJoin[i]))
            } else if (optionsJoin[i] === 'chocolate chip') {
                containArrCookies.push(new ChocholateChip(optionsJoin[i]))
            } else {
                containArrCookies.push(new OtherCookie(optionsJoin[i]))
            }
        }
        // console.log(containArrCookies[0].name, ingredients[0][0]);
        let resep = new Ingredient()
        let ingredients = resep.pharseingIngredient()
        for(let j = 0; j < ingredients.length; j++) {
            // console.log(typeof ingredients[j][1]);
            // console.log(ingredients[j][0].length , containArrCookies[j].name.length);
            
            if(ingredients[j][0] == containArrCookies[j].name) {
                containArrCookies[j].ingredients.push(ingredients[j][1])
                // console.log(containArrCookies[j]);
                
            }
        }
        return containArrCookies
    }
    // define other methods as needed
    static cookieRecommendation(day, dataCookies) {
        let sugarFree = []
        for(let i = 0; i < dataCookies.length; i++) {
            // console.log();
            if(dataCookies[i].ingredients.join('').match(/sugar/g) === null) {
                sugarFree.push(dataCookies[i])
            }
        }
        return sugarFree
    }
}

class Ingredient {
    constructor() {
        this.ingredients = []
    }

    pharseingIngredient() {
        let dataIngredients = fs.readFileSync('ingredients.txt', 'utf-8').split('\n')
        let resultArr = this.ingredients
        for(let i = 0; i < dataIngredients.length; i++) {
            let splitIngredients = dataIngredients[i].split(' = ')
            resultArr.push(splitIngredients)
        }
        return resultArr
    }
}
  
  // contoh driver code
  // sesuaikan dengan model inheritance
  // baca daftar kue dari file dan kirim ke cookie Factory
  // di mana lokasi file yang kamu tulis supaya code bisa berjalan?
  let options = fs.readFileSync('cookies.txt', 'utf-8')
//   let ingredients = new Ingredient()
//   ingredients.pharseingIngredient()

//   let bahanBaku = ingredients.ingredients
  let batch_of_cookies = CookieFactory.create(options);
  console.log(batch_of_cookies);
//   console.log(CookieFactory.cookieRecommendation(batch_of_cookies));
let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are :");
// console.log('=====>', sugarFreeFoods);

for(let i = 0; i < sugarFreeFoods.length; i++){
  console.log(sugarFreeFoods[i].name);
}

  

// let join = options.split('\n')
// console.log(join);
