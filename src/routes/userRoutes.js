const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/register', controller.register);
router.put('/update/:id', controller.setFoodUser);

module.exports = router;