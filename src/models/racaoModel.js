const mongoose = require('../database');

const RacaoSchema = new mongoose.Schema({

    nome:{
        type: String,
        require: true
    },
    quantidade:{
        type: Number,
        require: true
    },
    valor:{
        type: Number,
        require: true
    },
    data:{
        type: Date,
        default: Date.now,
        require: true
    }
})

module.exports = mongoose.model('Racao', RacaoSchema);