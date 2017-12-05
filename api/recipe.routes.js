// Recipe routing.
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');

// Recept.
const Recipe = require('../model/recipe.model');

// Alle recepten ophalen via promise.
routes.get('/recipes', function(req, res) 
{
    Recipe.find({})
        .then((recipes) => res.status(200).send(recipes))
        .catch((error) => res.status(401).send(error));
});

// Specifiek recept op _id opvragen.
routes.get('/recipes/:id', function(req, res)
{
    Recipe.findById({ _id: req.params.id })
        .then((recipe) => res.status(200).send(recipe))
        .catch((error) => res.status(401).send(error));
});

// Nieuw recept, op basis van de request body.
routes.post('/createrecipe', function(req, res) 
{
    // Recept aanmaken.
    let recipe = new Recipe(req.body);

    //Recept opslaan, met catch.
    recipe.save({})
        .then((recipe) => res.status(200).send(recipe))
        .catch((error) => res.status(401).send(error));
});

// Bewerkt recept.
routes.put('/editrecipe/:id', function(req, res) 
{
    // Vindt recept, verandert atribuut, slaat op.
    Recipe.findById({ _id: req.params.id })
        .then((recipe) => 
        {
            recipe.name = "Pizza Kippy Bertolli";

            recipe.save({})
                .then((recipe) => res.status(200).send(recipe))
                .catch((error) => res.status(401).send(error));

            res.status(200).json(recipe);
        })
        .catch((error) => res.status(401).send(error));
});

// Verwijder recept.
routes.delete('/deleterecipe/:id', function(req, res) 
{
    Recipe.findByIdAndRemove({ _id: req.params.id })
        .then((recipe) => res.status(200).send(recipe))
        .catch((error) => res.status(401).send(error));
});

module.exports = routes;