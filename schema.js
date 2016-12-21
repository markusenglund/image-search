const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    
    term: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    }
    
})

module.exports = schema;