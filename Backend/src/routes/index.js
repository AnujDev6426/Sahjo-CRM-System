const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const inventoryRoutes = require('./inventory.routes');

router.use('/auth', authRoutes);
router.use('/inventory', inventoryRoutes);



module.exports = router