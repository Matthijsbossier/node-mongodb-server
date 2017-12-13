// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Students met grades voor in de school.
const StudentSchema = require('./student.model');

// School schema.
const SchoolSchema = new Schema({
    name: String,
    location: String,
    students: [StudentSchema]
});

// School model.
const School = mongoose.model('school', SchoolSchema);

// Een voorbeeld axhool aanmaken, als deze nog niet bestaat.
School.find({name : "Avans Hogeschool", location : "Breda"}, function (err, docs) 
{
    if (docs.length)
    {
        // Bestaat al, niks doen.
    }

    // Aanmaken.
    else
    {
        const school = new School({
            name: 'Avans Hogeschool',
            location: 'Breda',
            students: 
            [
                { 
                    number: 2103708, 
                    name: 'Bram van de Griend', 
                    grades: 
                    [
                        {
                            class: 'Algoritmen & Datastructuur',
                            grade: 3
                        },
                        {
                            class: 'Software Architectuur',
                            grade: 2
                        },
                        {
                            class: 'Professionele Vaardigheden',
                            grade: 1
                        }
                    ]
                },
                { 
                    number: 2103241, 
                    name: 'Boboenderie Katoenderie', 
                    grades: 
                    [
                        {
                            class: 'Algoritmen & Datastructuur',
                            grade: 8
                        },
                        {
                            class: 'Software Architectuur',
                            grade: 2
                        },
                        {
                            class: 'Professionele Vaardigheden',
                            grade: 8
                        }
                    ]
                },
                { 
                    number: 2104123, 
                    name: 'Harlerliepo Donderbeer', 
                    grades: 
                    [
                        {
                            class: 'Algoritmen & Datastructuur',
                            grade: 5
                        },
                        {
                            class: 'Software Architectuur',
                            grade: 6
                        },
                        {
                            class: 'Professionele Vaardigheden',
                            grade: 3
                        }
                    ]
                }
            ]
        }).save();
    }
});

module.exports = School;