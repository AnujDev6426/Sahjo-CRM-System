const express = require('express');
const router = express.Router();
const { createInventory, getAllInventory,getInventoryById } = require('../controllers/inventory.controller');

router.post('/add_inventory', createInventory);
router.post('/getAllInventory', getAllInventory);
router.post('/getInventoryById', getInventoryById);

module.exports = router; 