const dogFood = require('../models/dogFoodModel');

module.exports = {
    create: async (req, res) => {
        try {
            const dogFoodCreate = await dogFood.create(req.body);
            return res.status(201).send(dogFoodCreate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na criação"});
        }
    },

    getMany: async (req, res) => {
        try {
            const dogFoodRead = await dogFood.find();
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
            const dogFoodReadOne = await dogFood.findById(_id);
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

    amount: async (req, res) => {
        try {
            const dogFoodRead = await dogFood.find();
            let amount = 0;
            for(let i = dogFoodRead.length-1; i >= 0; i--){
                amount += dogFoodRead[i].quantity*dogFoodRead[i].price;
            }
            return res.status(200).json(amount);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro ao calcular"});
        }
    },

    amountMonth: async (req, res) => {
        const month = req.params;
        try {
            const dogFoodRead = await dogFood.find();
            let amount = 0;
            for(let i = dogFoodRead.length-1; i >= 0; i--){
                const date = dogFoodRead[i].date.getMonth() + 1;
                if(date.toString() == month.month){
                    amount += dogFoodRead[i].quantity*dogFoodRead[i].price;
                }
            }
            return res.status(200).json(amount);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro ao calcular"});
        }
    }
}