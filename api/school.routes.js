// School routing.
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');

// School.
const School = require('../model/school.model');

// Alle schoolen ophalen via promise.
routes.get('/showall', function(req, res) 
{
    School.find({})
        .then((schools) => res.status(200).send(schools))
        .catch((error) => res.status(401).send(error));
});

// Specifiek school op _id opvragen.
routes.get('/show/:id', function(req, res)
{
    School.findById({ _id: req.params.id })
        .then((school) => res.status(200).send(school))
        .catch((error) => res.status(401).send(error));
});

// Nieuw school, op basis van de request body.
routes.post('/create', function(req, res) 
{
    // School aanmaken.
    let school = new School(req.body);

    //School opslaan, met catch.
    school.save({})
        .then((school) => res.status(200).send(school))
        .catch((error) => res.status(401).send(error));
});

// Bewerkt school.
routes.put('/edit/:id', function(req, res) 
{
    // Vindt school, verandert atribuut, slaat op.
    School.findById({ _id: req.params.id })
        .then((school) => 
        {
            school.name = "Rotterdam Hogeschool";
            school.location = "Rotterdam";

            school.save({})
                .then((school) => res.status(200).send(school))
                .catch((error) => res.status(401).send(error));

            res.status(200).json(school);
        })
        .catch((error) => res.status(401).send(error));
});

// Verwijder school.
routes.delete('/delete/:id', function(req, res) 
{
    School.findByIdAndRemove({ _id: req.params.id })
        .then((school) => res.status(200).send(school))
        .catch((error) => res.status(401).send(error));
});

module.exports = routes;