const Racao = require('../models/racaoModel');

module.exports = {
    create: async (req, res) => {
        try {
            const racaoCreate = await Racao.create(req.body);
            return res.status(201).send(racaoCreate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na criação"});
        }
    },

    getMany: async (req, res) => {
        try {
            const racaoRead = await Racao.find();
            return res.status(200).send(racaoRead);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na leitura"});
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!!_id)
                return res.status(400).send({error: "id não encontrado"});

            const racaoReadOne = await Racao.findById(_id);
            return res.status(200).send(racaoReadOne);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na leitura de um"});
        }
    },

    update: async (req, res) => {
        const _id = req.params.id;
        const update = req.body;
        try {
            const racaoUpdate = await Racao.findByIdAndUpdate(_id, update, {new: true});
            return res.status(200).send(racaoUpdate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na atualização"});
        }
    },

    delete: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!!_id){
                return res.status(400).send({error: "id não encontrado"});
            }

            await Racao.findByIdAndDelete(_id);
            return res.status(200).send({ok: "ração deletada"});
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro ao deletar"});
        }
    }
}