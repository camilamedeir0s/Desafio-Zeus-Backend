const express = require('express');
const router = express.Router();
const controller = require('../controllers/dogFoodController');

router.post('/create', controller.create);
router.get('/amountMonth', controller.amountMonth);
router.get('/find', controller.getMany);
router.get('/find/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);


module.exports = router;