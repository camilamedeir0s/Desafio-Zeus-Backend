const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const connectDB = require('./src/database/db');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config;

dotenv.config({path: 'config.env'});

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());

connectDB();

app.use(cors());
app.options('*', cors());
app.use(morgan('dev'));
app.all('*', require('./src/routes/index'));


app.get('/', (req, res) => {
    res.json({ message: 'OK' })
})


const PORT = 8081;
app.listen(PORT, () => {
    console.log('Servidor rodando.');
})