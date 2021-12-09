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
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
});

module.exports = mongoose.model('DogFood', dogFoodSchema);