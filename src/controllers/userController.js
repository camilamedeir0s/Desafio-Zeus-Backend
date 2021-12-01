const User = require('../models/userModel');

module.exports = {
    register: async (req, res) => {
        try {
            const user = await User.create(req.body);
            return res.status(201).send(user);
        } catch (error) {
            return res.status(400).send({ error: 'user registration error' });
        }
    }
}