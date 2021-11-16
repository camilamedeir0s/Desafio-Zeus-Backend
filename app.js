//Configurações iniciais
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const racaoRoutes = require('./src/routes/dogFoodRoutes');
const morgan = require('morgan');
const connectDB = require('./src/database/db');
const cors = require('cors');


//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());

connectDB();

app.all('*', require('./src/routes/index'));
app.use(morgan('dev'));
app.use(cors());


//rota inicial/endpoint

app.get('/', (req, res) =>{
    res.json({message: 'OK'})
})



//entregar uma porta
const PORT = 8081;
app.listen(PORT, () => {
    console.log('Servidor rodando.');
})