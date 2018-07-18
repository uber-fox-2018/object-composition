"use strict"
class CookieFactory{
    static create(options){
        let res = []
        for(let i = 0 ; i < options.length ; i++){
            for(let j = 0 ; j < options[i].length ; j++){
                if(options[i][j][0] === 'peanut butter'){
                    let peanut_butter = new PeanutButter()
                    peanut_butter.name = options[i][j][0]
                    res.push(peanut_butter)
                }else if(options[i][j][0] === 'chocolate chip'){
                    let chocolate_chip = new ChocholateChip()
                    chocolate_chip.name = options[i][j][0]
                    res.push(chocolate_chip)
                }else if(options[i][j][0] === 'chocolate cheese'){
                    let other_cookie = new OtherCookie()
                    other_cookie.name = options[i][j][0]
                    res.push(other_cookie)
                }else if(options[i][j][0] === 'chocolate butter'){
                    let other_cookie = new OtherCookie()
                    other_cookie.name = options[i][j][0]
                    res.push(other_cookie)
                }
            }
        }
        return res
    }
}

class Cookie{
    constructor(){
        this.name = ''
        this.status = 'mentah'
        // this.ingredients = []
    }
    bake(){
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie{
    constructor(){
        super()
        this.peanut_count = 100
    }
}
class ChocholateChip extends Cookie{
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

var fs = require('fs')
var options = fs.readFileSync('cookies.txt').toString().split("\n")
for(let i = 0 ; i < options.length ; i++){
    options[i] = options[i].split(' = ')
    for(let j = 0 ; j < options[i].length ;j++){
        options[i][j] = options[i][j].split(', ')
    }
}



let batch_of_cookies = CookieFactory.create(options)
// console.log(batch_of_cookies) // release 0


class Ingredient {
    static create(options){
        for(let i = 0 ; i < options.length ; i++){
            // console.log(batch_of_cookies[i])
            
            for(let j = 1 ; j < options[i].length ; j++){
                var arr = []
                
                for(let k = 0 ; k < options[i][j].length ;k++){
                    options[i][j][k] = options[i][j][k].split(': ')
                    // batch_of_cookies[i].ingredients += options[i][j][k][1]
                    arr.push(options[i][j][k][1])
                    // console.log(options[i][j][k])
                }
                batch_of_cookies[i].ingredient = arr
                
                // console.log(options[i][j])
            }
        }
    }
}
let ingredients = Ingredient.create(options)
console.log(batch_of_cookies) // release 1
