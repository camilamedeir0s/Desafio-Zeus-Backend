const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aprendendo').then(() => {
    console.log('MongoDB conectado')
}).catch((err) => {
    console.log('Houve um erro ao se conectar ao mongoDB: ' +err)
})

const UsuarioSchema = mongoose.Schema({

    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    }
})

mongoose.model('usuarios', UsuarioSchema)

const novousuario = mongoose.model('usuarios')

new novousuario({
    nome: 'Ozzy',
    sobrenome: 'zz'
}).save().then(() => {
    console.log('Usuario criado com sucesso')
}).catch((err) =>{
    console.log('Houve um erro: ' +err)
})