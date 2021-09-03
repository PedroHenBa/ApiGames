const express = require('express');
const router = express.Router();
const gamesController = require('../Controller/gamesController');
const authJwt = require('../middleware/authJwt');

router.get('/games', gamesController.get_games);

router.get('/game/:id', gamesController.get_game_id);

router.post('/game', authJwt, gamesController.post_game);

router.delete('/game/:id', authJwt, gamesController.delete_game);

router.put('/game/:id', authJwt, gamesController.put_game);

module.exports = router;
