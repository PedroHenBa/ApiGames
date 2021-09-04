import { Router } from 'express';
const usersController = require('../Controller/usersController');

class UsersRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.post('/user/auth', usersController.user_auth);
  }
}

export default UsersRoutes;
