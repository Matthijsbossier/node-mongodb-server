// Ingredient routing.
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');

// Ingredient.
const Ingredient = require('../model/ingredient.model');

// Alle ingredienten ophalen via promise.
routes.get('/shopping-list/', function(req, res) 
{
    Ingredient.find({})
        .then((ingredients) => res.status(200).send(ingredients))
        .catch((error) => res.status(401).send(error));
});

// Specifiek recept op _id opvragen.
routes.get('/ingredients/:id', function(req, res)
{
    Ingredient.findById({ _id: req.params.id })
        .then((ingredient) => res.status(200).send(ingredient))
        .catch((error) => res.status(401).send(error));
});

// Nieuw recept, op basis van de request body.
routes.post('/createingredient', function(req, res) 
{
    // Recept aanmaken.
    let ingredient = new Ingredient(req.body);

    //Recept opslaan, met catch.
    ingredient.save({})
        .then((ingredient) => res.status(200).send(ingredient))
        .catch((error) => res.status(401).send(error));
});

// Bewerkt recept.
routes.put('/editingredient/:id', function(req, res) 
{
    // Vindt recept, verandert atribuut, slaat op.
    Ingredient.findById({ _id: req.params.id })
        .then((ingredient) => 
        {
            ingredient.name = "Pizza Kippy Bertolli";

            ingredient.save({})
                .then((ingredient) => res.status(200).send(ingredient))
                .catch((error) => res.status(401).send(error));

            res.status(200).json(ingredient);
        })
        .catch((error) => res.status(401).send(error));
});

// Verwijder recept.
routes.delete('/deleteingredient/:id', function(req, res) 
{
    Ingredient.findByIdAndRemove({ _id: req.params.id })
        .then((ingredient) => res.status(200).send(ingredient))
        .catch((error) => res.status(401).send(error));
});

module.exports = routes;