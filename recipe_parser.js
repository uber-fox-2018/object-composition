class RecipeParser {
    static parseFile(file_name) {
        let recipes = [];
        const fs = require('fs');
        const fileContent = fs.readFileSync(file_name, 'utf8');
        fileContent.split('\r\n').forEach(line => {
           recipes.push(this.parseRecipe(line));
        });
        return recipes;
    }

    static parseRecipe(recipeStr) {
        let recipeArr = recipeStr.split('=');
        return {
            'name' : recipeArr[0].trim(),
            'options' : this.parseIngredients(recipeArr[1].trim())
        }
    }

    static parseIngredients(ingredientStr) {
        let optionArr, optionsArr, ingredients = [];
        optionsArr = ingredientStr.split(',');
        optionsArr.forEach(item => {
            optionArr = item.split(':');
            ingredients.push({
                'amount' : optionArr[0].trim(),
                'name' : optionArr[1].trim()
            });
        });
        return ingredients;
    }
}

module.exports = RecipeParser;