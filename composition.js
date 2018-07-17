'use strict'

const fs = require('fs')
var readFile =  fs.readFileSync('./cookies.txt','utf8')
var arrFile = readFile.split('\n')
// console.log(arrFile);

class Cookie{
    constructor(name,ingredients){
        this.name = name
        this.status = 'mentah'
        this.ingredients = []
        this.has_sugar = null
    }

    bake(){
        this.status = 'selesai masak'
    }
    
}

class PeanutButter extends Cookie{
    constructor(name){
        super(name)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie{
    constructor(name){
        super(name)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name){
        super(name)
        this.other_count = 150
    }
}



class CookieFactory{
    static create(options){

        var cookies = []
        for(var i = 0; i < options.length;i++){
            if(options[i] === 'peanut butter'){
                cookies.push(new PeanutButter(`${options[i]}`))
            }else if(options[i] === 'chocholate chip'){
                cookies.push(new ChocholateChip(`${options[i]}`))
            }else{
                cookies.push(new OtherCookie(options[i]))
            }
        }

        var getIng = new Ingredients()
        var komposisi = getIng.generateIng()

        for(var i = 0; i < komposisi.length;i++){
            if(komposisi[i][0] === cookies[i].name){
                cookies[i].ingredients.push(komposisi[i][1])
            }
        }

        return cookies

    }



    static CookieRecomendation(day,batch_of_cookies){
        var parseKompoisi = []
        var parsing1 = []
        var parsing2 = []
 
        var rekomendasi = []
        for(var i = 0; i < batch_of_cookies.length;i++){    
            if(batch_of_cookies[i].ingredients[0].match(/sugar/g) === null){
                rekomendasi.push(batch_of_cookies[i])
            }
        }
        // console.log(rekomendasi);
        return rekomendasi
        

        
        
    }
}


class Ingredients{
    constructor(){
        
    }

    generateIng(){
        var readIngredients = fs.readFileSync('./ingeredients.txt','utf8').split('\n')
        // console.log(readIngredients);
        var arrIng =[]
        for(var i = 0; i < readIngredients.length;i++){
           arrIng.push(readIngredients[i].split(' = '))
        }
        return arrIng
    }
}

var batch_of_cookies = CookieFactory.create(arrFile)
console.log(batch_of_cookies);

var sugarFreeFoods = CookieFactory.CookieRecomendation('tuesday',batch_of_cookies)
console.log('sugar free cakes are :');
for(let i = 0; i < sugarFreeFoods.length;i++){
    console.log(sugarFreeFoods[i].name);
    
}

// console.log(sugarFreeFoods);




