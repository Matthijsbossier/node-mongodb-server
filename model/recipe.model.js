// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Ingredient voor in het recept.
const Ingredient = require('../model/ingredient.model');

// Recept schema.
const RecipeSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    ingredients: 
    [{
        // Deze lijst gaat dus ingredient objecten bevatten.
        ingredient: Ingredient
    }]
}, 

{
    timestamps: true
});

// Het recept.
const Recipe = mongoose.model('recipe', RecipeSchema);

// Een voorbeeld recept aanmaken, bevat (nog) geen ingredienten.
const recipe = new Recipe({
    name: 'Pizza salami',
    description: 'Test recipe',
    imagePath: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
    ingredients: 
    [
        
    ] 
}).save();

module.exports = Recipe;