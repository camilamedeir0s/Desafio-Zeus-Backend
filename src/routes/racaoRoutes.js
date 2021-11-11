const router = require('express').Router();

const Racao = require('../src/models/racaoModel');

//rotas API (dúvida: pq usar async?)

//criação de dados:
router.post('/', async (req, res) => {

    //dúvida: COMO VINCULAR A MODEL AQUI?????

    try {    
        await racao.create(racao)
        res.json({message: 'racao inserida no sistema com sucesso'})
    } catch (error) {
        res.json({error: error})
    }
})

module.exports = router