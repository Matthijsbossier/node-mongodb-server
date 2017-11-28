const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// definitie van je database:
const RecipeSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    imagePath: String,
    ingredients
    : [{
            name: String,
            amount: Number,
     }]
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' user (every time you require this file!)
// const  = new User({
//     name: 'Joe',
//     title: 'Mr.',
//     recipes: [
//         {name: 'Pizza salami', 
//             ingredients : [
//             {name: 'pizzabodem', weight: 200, price: '2.50'},
//             {name: 'tomatensaus', weight: 100, price: '1.50'},
//             {name: 'kaas + salami', weight: 100, price: '3.50'}
//             ]
//         }

//     ]
// }).save();

const recipe = new Recipe({
    name: 'Pizza salami',
    description: 'Test recipe',
    imagePath: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
    ingredients: [
        { name: 'Pizzabodem', amount: 1},
        { name: 'Kaas', amount: 1},
        { name: 'Tomatensaus', amount: 1},
        { name: 'Salami', amount: 5},
        ] 
}).save();

// alles wat naar buiten toe wordt geexporteerd:
module.exports = Recipe;