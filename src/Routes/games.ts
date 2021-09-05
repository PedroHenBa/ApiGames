import { Router } from 'express';
import { GamesController } from '../Controller/gamesController';
import AuthJwt from '../middleware/authJwt';

class GamesRoutes {
  public router: Router;
  public AuthJWT: AuthJwt = new AuthJwt();
  public gamesController: GamesController = new GamesController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get('/games', this.gamesController.getGames);
    this.router.get('/game/:id', this.gamesController.getGame);
    this.router.post('/game', this.AuthJWT.authorizeJWT, this.gamesController.createGame);
    this.router.delete(
      '/game/:id',
      this.AuthJWT.authorizeJWT,
      this.gamesController.deleteGame,
    );
    this.router.put(
      '/game/:id',
      this.AuthJWT.authorizeJWT,
      this.gamesController.updateGame,
    );
  }
}

export default GamesRoutes;
