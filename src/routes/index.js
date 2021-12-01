const express = require('express');
const router = express.Router();

router.use('/food', require('./dogFoodRoutes'));
router.use('/user', require('./userRoutes'));
router.use('/auth', require('./authRoutes'));

module.exports = router;