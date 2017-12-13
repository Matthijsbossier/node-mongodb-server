// Setup.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Grade schema.
const GradeSchema = new Schema({
    class: String,
    grade: Number
});

module.exports = GradeSchema;