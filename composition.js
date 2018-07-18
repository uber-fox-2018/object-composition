"use strict"
const fs = require('fs')

class Cookie {
  constructor(name){
    this.name = name
    this.ingridients = []
    this.status = 'mentah'
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

class ChocolateChip extends Cookie {
  constructor(name) {
    super(name)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name) {
    super(name)
    this.other_count = 150
  }
}

class CookieFactory {
  static create(option) {
    let arr = []
    let data = fs.readFileSync(option,'utf8').split('\n')
    for (let i = 0; i < data.length-1; i++){
      if (data[i]==='peanut butter'){
        var cookie = new PeanutButter('peanut butter')
      } else if (data[i]==='chocolate chip'){
        var cookie = new ChocolateChip('chocolate chip')
      } else if (data[i]==='chocolate cheese'){
        var cookie = new OtherCookie('chocolate cheese')
      } else if (data[i]==='chocolate butter'){
        var cookie = new OtherCookie('chocolate butter')
      }
      arr.push(cookie)
    }
    return arr
  }
}

let batch_of_cookies = CookieFactory.create('cookies.txt')
console.log(batch_of_cookies)
