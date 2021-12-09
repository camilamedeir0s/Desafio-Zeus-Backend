const dogFood = require('../models/dogFoodModel');

module.exports = {
    create: async (req, res) => {
        try {
            const dogFoodCreate = await dogFood.create( { ...req.body, user: req.userId });
            return res.status(201).send(dogFoodCreate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na criação"});
        }
    },

    getMany: async (req, res) => {
        try {
            const dogFoodRead = await dogFood.find().populate('user');
            return res.status(200).send(dogFoodRead);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na leitura"});
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!await dogFood.findById(_id)){
                return res.status(400).send({error: "id não encontrado"});
            }
            const dogFoodReadOne = await dogFood.findById(_id).populate('user');
            return res.status(200).send(dogFoodReadOne);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na leitura de um"});
        }
    },

    update: async (req, res) => {
        const _id = req.params.id;
        const update = req.body;
        try {
            if(!await dogFood.findById(_id)){
                return res.status(400).send({error: "id não encontrado"});
            }
            const dogFoodUpdate = await dogFood.findByIdAndUpdate(_id, update, {new: true});
            return res.status(200).send(dogFoodUpdate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na atualização"});
        }
    },

    delete: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!await dogFood.findById(_id)){
                return res.status(400).send({error: "id não encontrado"});
            }
            await dogFood.findByIdAndDelete(_id);
            return res.status(200).send({ok: "ração deletada"});
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro ao deletar"});
        }
    },

    amountMonth: async (req, res) => {
        const month = req.query.month;
        const year = req.query.year;
        const date = new Date()
        try {
            const dogFoodRead = await dogFood.find({
                "date": {
                    $gte: new Date(year, month-1),
                    $lte: new Date(year, month)
                }
            });
            let amountPrice = 0;
            let amountQuantity = 0;
            for(let i = dogFoodRead.length-1; i >= 0; i--){
                amountPrice += dogFoodRead[i].price;
                amountQuantity += dogFoodRead[i].quantity;
            }
            return res.status(200).json({amountPrice, amountQuantity});
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro ao calcular"});
        }
    }
}