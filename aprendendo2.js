const express = require('express')
const app = express()
// const handlebars = require('express-handlebars')
// const mongoose = require('mongoose')

//Config
    //Template Engine
    // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    // app.set('view engine', 'handlebars')



app.get('/', function(req, res){
    res.send('Seja bem vindo')
})


app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
})
