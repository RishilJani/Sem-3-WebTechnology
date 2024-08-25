const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        FacId : Number,
        name : String,
        department : String,
        subject: String,
        age: Number
    }
);

module.exports = mongoose.model('Faculty',schema,'Faculties');