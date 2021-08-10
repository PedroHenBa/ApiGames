const express = require('express');
const router = express.Router();
const gamesController = require('../Controller/gamesController');

router.get('/games', gamesController.get_games);

router.get('/game/:id', gamesController.get_game_id);

router.post('/game', gamesController.post_game);

router.delete('/game/:id', gamesController.delete_game);

router.put('/game/:id', gamesController.put_game);

module.exports = router;
