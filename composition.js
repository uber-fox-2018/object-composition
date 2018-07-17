"use strict"

const fs = require ('fs')
const fileContentKue = fs.readFileSync('./cookie_list.txt','utf8')
let parserLines = fileContentKue.split('\r\n')
let parserKue = [] 
let kueArray = []
let bahanArray = []
let jumlahBahanArray = []
for (let i=0 ; i < parserLines.length ;i++ ){
    parserKue.push(parserLines[i].split('='))
}
for (let i=0 ; i <parserKue.length ; i++){
    kueArray.push(parserKue[i][0])
    bahanArray.push(parserKue[i][1].split(','))
}

for (let i=0 ; i< bahanArray.length ; i++){
    let bahan = []
    for (let j=0 ; j < bahanArray[i].length ; j++){
        bahan.push(bahanArray[i][j].split(':'))
    }
    jumlahBahanArray.push(bahan)
}

let komplit = []

for (let i=0 ; i < jumlahBahanArray.length ; i++){
    var bahan_kue = {}
    let bahanperkueArray = []
    bahan_kue['name'] = kueArray[i]
    
    
    
    for (let j=0 ; j < jumlahBahanArray[i].length ; j++){
        let bahanperkue = {}
        
            bahanperkue['name'] = jumlahBahanArray[i][j][1].trim()
            bahanperkue['amount'] = jumlahBahanArray[i][j][0].trim()
            bahanperkueArray.push(bahanperkue)        
            
    }
    bahan_kue['options'] = bahanperkueArray
    komplit.push(bahan_kue)
}





class Cookie {
    constructor(name) {
        this.name = name
        this.status = 'mentah'  
        this.ingredients = []
        this.has_sugar = false
              
    }

    bake () {
        this.status = 'selesai dimasak'
    }

    listKueBahan (){
        let listKue_bahan = new Ingredients()
        
        this.ingredients.push(listKue_bahan.bahan,listKue_bahan.jumlahBahan)
    }
}

class PeanutButter extends Cookie {
    constructor(name,bahan){
        super()
        this.name = name
        this.peanut_count = 100
        this.ingredients = bahan
    }
}

class ChocolateChip extends Cookie {
    constructor (name,bahan){
        super()
        this.name = name
        this.choc_chip_count = 200
        this.ingredients = bahan
    }
}

class OtherCookie extends Cookie {
    constructor (name,bahan){
        super()
        this.name = name
        this.other_count = 150
        this.ingredients = bahan
    }
}

class Ingredients {
    constructor(options){
        this.bahan = options['name']
        this.jumlahBahan = options['amount']
    }
}

class CookieFactory {
    static create(komplit){
        let list = []
        komplit.forEach(element => {
            if(element.name == 'peanut butter'){
                var options = []
                element.options.forEach(bahan =>{
                    
                    var option = new Ingredients(bahan)
                    options.push(option)
                })
                let Peanut_Butter = new PeanutButter(element.name,options)
                list.push(Peanut_Butter)
                
            }
            else if(element.name == 'chocolate chip'){
                var options = []
                element.options.forEach(bahan =>{
                    
                    var option = new Ingredients(bahan)
                    options.push(option)
                })
                let Chocolate_Chip = new ChocolateChip(element.name,options)
                list.push(Chocolate_Chip)
                
            }
            else {
                var options = []
                element.options.forEach(bahan =>{
                    
                    var option = new Ingredients(bahan)
                    options.push(option)
                })
                let Other_Cookie = new OtherCookie(element.name,options)
                list.push(Other_Cookie)
                
            }
        });
       return list
    }

    static cookieRecommendation (day,batch_of_cookies){
       
       let hasil = []
       if (day == 'tuesday'){
       batch_of_cookies.forEach(cookie => {
        cookie.ingredients.forEach(ingredients => {
            if(ingredients.bahan == 'sugar'){
                cookie.has_sugar = true
            }
           
        })
        
       })
    
      batch_of_cookies.forEach(cekSugar => {
          if(cekSugar.has_sugar == false){
              hasil.push(cekSugar.name)
          }
      })

      return hasil[0]
    }
    }
}

//parser

let batch_of_cookies = CookieFactory.create(komplit)
console.log(batch_of_cookies)
// console.log(batch_of_cookies[0])
// console.log(batch_of_cookies[2])
// console.log(batch_of_cookies[3])
// console.log(batch_of_cookies[1])
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday',batch_of_cookies)
console.log(sugarFreeFoods)
//console.log(batch_of_cookies[0].name)

