const express = require('express');
const router = express.Router();

router.use('/racao', require('./racaoRoutes'));

module.exports = router;