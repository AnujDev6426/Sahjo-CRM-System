const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const employeeRoute = require('./Admin Routes/employee.routes')

router.use('/auth', authRoutes);
router.use('/employee', employeeRoute)



module.exports = router