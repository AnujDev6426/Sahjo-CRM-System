const express = require('express');
const router = express.Router();
const { register } = require('../../controllers/Admin Controllers/employee.controller');


router.post('/register', register);

module.exports = router;