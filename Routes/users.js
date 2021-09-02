const express = require('express');
const router = express.Router();
const usersController = require('../Controller/usersController');

router.get('/users', (req, res) => '<h1>salve</h1>');

module.exports = router;
