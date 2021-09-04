const express = require('express');
const router = express.Router();
const gamesController = require('../Controller/gamesController');
import { authorizeJWT } from '../middleware/authJwt';

router.get('/games', gamesController.get_games);

router.get('/game/:id', gamesController.get_game_id);

router.post('/game', authorizeJWT, gamesController.post_game);

router.delete('/game/:id', authorizeJWT, gamesController.delete_game);

router.put('/game/:id', authorizeJWT, gamesController.put_game);

module.exports = router;
