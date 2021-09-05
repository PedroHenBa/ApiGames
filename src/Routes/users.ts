import { Router } from 'express';
import { UsersControllers } from '../Controller/usersController';

class UsersRoutes {
  public router: Router;
  public usersControllers: UsersControllers = new UsersControllers();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.post('/user/auth', this.usersControllers.userAuth);
  }
}

export default UsersRoutes;
