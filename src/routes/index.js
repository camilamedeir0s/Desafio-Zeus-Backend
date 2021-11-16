const express = require('express');
const router = express.Router();

router.use('/food', require('./dogFoodRoutes'));

module.exports = router;