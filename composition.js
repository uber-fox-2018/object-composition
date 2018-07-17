"use strict"
var fs = require('fs')

class Cookie {
    constructor(name) {
        this.name= name
        this.status= 'mentah'
        this.ingredients= []

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


var options = fs.readFileSync('cookies.txt')
    .toString()
    .split("\r\n")
  

console.log (options)

class CookieFactory {
    static create(options){
        var result= []

        for (let i=0; i<options.length; i++){
            if (options[i]=='peanut butter') {
                let peanut_butter= new PeanutButter()
                peanut_butter.name= options[i]
                result.push(peanut_butter)
            }

            else if (options[i]=='chocolate chip') {
                let chocolate_chip= new ChocolateChip()
                chocolate_chip.name= options[i]
                result.push(chocolate_chip)
            }
            
            else {
                let other_cookie= new OtherCookie()
                other_cookie.name= options[i]
                result.push(other_cookie)
            }
        }
        return result
    }
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)