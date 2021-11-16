const mongoose = require('mongoose');

const dogFoodSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('dogFood', dogFoodSchema);