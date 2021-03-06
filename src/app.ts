import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import instanceConnection from './database/Connection';
import GamesRoutes from './Routes/games';
import UsersRoutes from './Routes/users';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initilizeConfig();
    this.initializeConnection();
    this.initializeRoutes();
  }

  private initilizeConfig(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private initializeRoutes(): void {
    this.app.use('/', new GamesRoutes().router);
    this.app.use('/', new UsersRoutes().router);
  }

  public listen(): void {
    this.app.listen(process.env.PORT || 3000, () => console.log('server running'));
  }

  private async initializeConnection(): Promise<void> {
    const connection = instanceConnection.getConnection();
    try {
      await connection.authenticate();
      console.log('success connection with DB');
    } catch (e) {
      console.log(e);
    }
  }
}

export default App;
