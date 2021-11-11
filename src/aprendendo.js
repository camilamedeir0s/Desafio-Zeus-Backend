//Configurações iniciais
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//forma de ler JSON / middlewares (???????)
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());


//Rotas API
const racaoRoutes = require('../src/routes/racaoRoutes');
app.use('/racao', racaoRoutes)

//rota inicial/endpoint

app.get('/', (req, res) =>{
    res.json({message: 'OK'})
})


//dúvida: COMO CONECTAR MONGOOSE???? 


//entregar uma porta
const PORT = 8081;
app.listen(PORT, () => {
    console.log('Servidor rodando.');
})