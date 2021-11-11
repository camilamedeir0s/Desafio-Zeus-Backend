const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/racao').then(() => {
    console.log('MongoDB conectado')
}).catch((err) => {
    console.log('Houve um erro ao se conectar ao mongoDB: ' +err)
})

module.exports = mongoose;