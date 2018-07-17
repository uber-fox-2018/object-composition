const Ingredient = require('./ingredient');

class Cookie {
  constructor (name){
    this._name = name;
    this._status = 'mentah';
    this._ingredients = [];
  }

  set status (newStatus) {
    return this._status = newStatus;
  }

  bake (){
    return this.status = 'selesai dimasak'
  }

  get ingredients(){
    return this._ingredients;
  }

  set ingredients(obj){
    return this._ingredients.push(new Ingredient (obj));
  }
}

class PeanutButter extends Cookie {
  constructor () {
    super ('peanut butter')
    this._peanutCount = 100;
  }
}

class ChocolateChip extends Cookie {
  constructor () {
    super ('chocolate chip')
    this._chocoChipCount = 200;
  }
}

class OtherCookie extends Cookie {
  constructor (name) {
    super (name)
    this._otherCount = 150;
  }
}

module.exports = {PeanutButter, ChocolateChip, OtherCookie};
