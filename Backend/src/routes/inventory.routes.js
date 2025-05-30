const express = require('express');
const router = express.Router();
const { createInventory, getAllInventory,getInventoryById } = require('../controllers/inventory.controller');
const { getBilty } = require('../controllers/orderAndBiltyController');

router.post('/add_inventory', createInventory);
router.post('/getAllInventory', getAllInventory);
router.post('/getInventoryById', getInventoryById);
router.post('/getBilty', getBilty)

module.exports = router; 