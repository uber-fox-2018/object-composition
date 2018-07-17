"use strict"

class Cookie {
    constructor(){
        this.name
        this.status = "mentah"
        this.status
        this.ingredients = []
    }

    bake(){
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie {
    constructor(){
        super()
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(){
        super()
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(){
        super()
        this.choc_chip_count = 150
    }
}


const fs = require('fs')
let option = fs.readFileSync('./cookies.txt', 'UTF-8')
    .toString()
    .split('\n')

// console.log(cookies)

class CookieFactory{
    static create(option) {

        let result = []

        for(let i = 0; i < option.length; i++){
            if(option[i] === 'peanut butter'){
                let peanut_butter = new PeanutButter()
                peanut_butter.name = option[i]
                result.push(peanut_butter)
            } else if(option[i] === 'chocolate chip'){
                let chocolate_chip = new ChocolateChip()
                chocolate_chip.name = option[i]
                result.push(chocolate_chip)
            } else {
                let other_cookie = new OtherCookie()
                other_cookie.name = option[i]
                result.push(other_cookie)
            }
        }

        return result
    }
}

let batch_of_cookies = CookieFactory.create(option)
console.log(batch_of_cookies)



