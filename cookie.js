class Cookie {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
        this.has_sugar = this._hasSugar(ingredients);
        this.status = 'mentah';
    }

    _hasSugar(ingredients) {
        let result = false;
        ingredients.forEach(ing => {
            if(ing.name === 'sugar')
                result = true;
        });
        return result;
    }
}

class Ingredient {
    constructor(option) {
        this.name = option["name"];
        this.amount = option["amount"];
    }
}

class PeanutButter extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients);
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients);
        this.chocolate_chip_count = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients);
        this.other_count = 150;
    }
}

class PeanutButterCrumbled {
    constructor(name, ingredients) {
        let base = new PeanutButter(name, ingredients);
        this.name = name;
        this.ingredients = base.ingredients;
        this.has_sugar = base.has_sugar;
        this.isCrumbled = true;
    }
}

class ChocolateChipCrumbled {
    constructor(name, ingredients) {
        let base = new ChocolateChip(name, ingredients);
        this.name = name;
        this.ingredients = base.ingredients;
        this.has_sugar = base.has_sugar;
        this.isCrumbled = true;
    }
}

module.exports = {
    Ingredient: Ingredient,
    PeanutButter: PeanutButter,
    ChocolateChip: ChocolateChip,
    OtherCookie: OtherCookie,
    PeanutButterCrumbled: PeanutButterCrumbled,
    ChocolateChipCrumbled: ChocolateChipCrumbled
}



