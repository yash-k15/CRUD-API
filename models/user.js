const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    tech: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    }
})

mongoose.model('User', userSchema);