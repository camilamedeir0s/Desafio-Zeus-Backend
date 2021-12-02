const User = require('../models/userModel');

module.exports = {
    register: async (req, res) => {
        const {name, email, password} = req.body;
        try {
            if(await User.findOne({email}))
                return res.status(400).send({ error: 'user already exists' });

            const user = await User.create({name, email, password});
            return res.status(201).send(user);
        } catch (error) {
            console.log(error)
            return res.status(400).send({ error: 'user registration error' });
        }
    },

    setFoodUser: async (req, res) => {
        const _id = req.params.id;
        const {dogFood} = req.body;
        try {
            await User.findByIdAndUpdate(_id, dogFood, {new:true});
            return res.status(200).send({ ok: 'update success' })
        } catch (error) {
            return res.status(400).send({ error: 'could not relate user to feed' });
        }
    }
}