import { Router } from 'express';
const gamesController = require('../Controller/gamesController');
import AuthJwt from '../middleware/authJwt';

class GamesRoutes {
  public router: Router;
  public AuthJWT: AuthJwt = new AuthJwt();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get('/games', gamesController.get_games);
    this.router.get('/game/:id', gamesController.get_game_id);
    this.router.post('/game', this.AuthJWT.authorizeJWT, gamesController.post_game);
    this.router.delete(
      '/game/:id',
      this.AuthJWT.authorizeJWT,
      gamesController.delete_game,
    );
    this.router.put('/game/:id', this.AuthJWT.authorizeJWT, gamesController.put_game);
  }
}

export default GamesRoutes;
