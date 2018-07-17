class Ingredient{
  constructor (recipe) {
    this._name = recipe.name
    this._amount = recipe.amount
  }

  get name (){
    return this._name;
  }

  get amount (){
    return this._amount;
  }
}

module.exports = Ingredient;