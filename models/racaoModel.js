const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aprendendo').then(() => {
    console.log('MongoDB conectado')
}).catch((err) => {
    console.log('Houve um erro ao se conectar ao mongoDB: ' +err)
})

const UsuarioSchema = new mongoose.Schema({

    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('usuarios', UsuarioSchema)