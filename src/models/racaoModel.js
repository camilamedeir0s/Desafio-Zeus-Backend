const mongoose = require('mongoose');

const RacaoSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    quantidade:{
        type: Number,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    data:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Racao', RacaoSchema);