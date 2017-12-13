// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Grade schema.
const GradeSchema = require('./grade.model');

// Student schema.
const StudentSchema = new Schema({
    number: Number,
    name: String,
    grades: [GradeSchema]
});

module.exports = StudentSchema;