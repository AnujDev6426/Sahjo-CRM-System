const express = require('express');
const router = express.Router();
const { login, logOut } = require('../controllers/auth.controller');

router.post('/login', login);
router.post('/logout', logOut);


module.exports = router;



