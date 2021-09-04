const express = require('express');
const router = express.Router();
const usersController = require('../Controller/usersController');

router.post('/user/auth', usersController.user_auth);

module.exports = router;
