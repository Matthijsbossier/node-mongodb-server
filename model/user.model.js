const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// definitie van je database:
const UserSchema = new Schema({
    name: String,
    title: String,
    recipes: [{
        name: String,
        ingredients: [{
            name: String,
            weight: Number,
            price: String
        }]
     }]
}, {
    timestamps: true
});


const User = mongoose.model('user', UserSchema);

// Add a 'dummy' user (every time you require this file!)
const user = new User({
    name: 'Joe',
    title: 'Mr.',
    recipes: [
        {name: 'Pizza salami', 
            ingredients : [
            {name: 'pizzabodem', weight: 200, price: '2.50'},
            {name: 'tomatensaus', weight: 100, price: '1.50'},
            {name: 'kaas + salami', weight: 100, price: '3.50'}
            ]
        }

    ]
}).save();

// alles wat naar buiten toe wordt geexporteerd:
module.exports = User;