const fs = require('fs')
const {PeanutButter, ChocolateChip, OtherCookie} = require('./composition')
const {Ingredient} = require('./ingredient')

class CookieFactory {
  static create (options, ingredient) {
    let optionList = options
    let ingredients = Ingredient.getIngredient(ingredient)
    let cookieOption = null
    let cookieOptArr = []

    for (let i = 0, j = 0; i < optionList.length, j < ingredients.length; i++, j++) {
      if (optionList[i] === 'peanut butter') {
        cookieOption = new PeanutButter (optionList[i], ingredients[j])
      } else if (optionList[i] === 'chocolate chip') {
        cookieOption = new ChocolateChip (optionList[i], ingredients[j])
      } else if (optionList[i] === 'chocolate cheese') {
        cookieOption = new OtherCookie (optionList[i], ingredients[j])
      } else if (optionList[i] === 'chocolate butter') {
        cookieOption = new OtherCookie (optionList[i], ingredients[j])
      }
      cookieOptArr.push(cookieOption)
    }
    console.log(cookieOptArr) 
  }
}

module.exports = CookieFactory