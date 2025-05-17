const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const employeeRoutes = require('./Admin Routes/employee.routes');
const branchRoutes = require('./Admin Routes/branch.routes');

router.use('/auth', authRoutes);
router.use('/employee', employeeRoutes);
router.use('/branches', branchRoutes);




module.exports = router