class Ingredient {
  static getIngredient (ingredient) {
    let ingredients = ingredient
    let ingredientArr = []
    let material = []

    for (let i = 0; i < ingredients.length; i++) {
      var split2 = ingredients[i].split(' = ')
      ingredientArr.push(split2)
    }

    for (let i = 0; i < ingredientArr.length; i++) {
      for (let j = 1; j < ingredientArr[i].length; j++) {
        var split3 = ingredientArr[i][j].split(', ')
        material.push(split3)
      }
    }
    return material
  }
}

module.exports = {Ingredient}