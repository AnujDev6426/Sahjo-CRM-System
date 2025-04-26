const express = require('express');
const router = express.Router();
const { createInventory, getAllInventory, getInventoryById ,updateInventory, deleteInventory } = require('../controllers/inventory.controller')


router.post('/add_inventory', createInventory)
router.post('/get_inventory', getAllInventory)
router.post('/get_inventory_id', getInventoryById)
// router.post('/update_inventory', updateInventory)
// router.post('/delete_inventory', createInventory)

module.exports = router




