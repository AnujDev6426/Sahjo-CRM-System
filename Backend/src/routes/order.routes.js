const express = require('express');
const router = express.Router();
const { createOrder , updateOrder} = require('../controllers/orderAndBiltyController');


router.post('/create', createOrder); 
router.post('/update', updateOrder); 


module.exports = router;