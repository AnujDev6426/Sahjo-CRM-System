const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const employeeRoutes = require('./Admin Routes/employee.routes');
const branchRoutes = require('./Admin Routes/branch.routes');
const { roleChecker } = require('../middlewares/role.middleware');
const {verifyToken} = require('../middlewares/jwt.middleware')

router.use('/auth', authRoutes);
router.use('/employee',verifyToken, roleChecker('admin'), employeeRoutes);
router.use('/branches', verifyToken , roleChecker('admin'), branchRoutes);


module.exports = router