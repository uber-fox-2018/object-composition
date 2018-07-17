class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.ingredients = ingredients
    this.has_sugar = null
    this.status = 'Masak'
  }

  bake() {
    this.status = 'Selesai dimasak'
  }

}

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.peanut_butter_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.chocolate_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.other_count = 150
  }
}

module.exports = {PeanutButter, ChocolateChip, OtherCookie}