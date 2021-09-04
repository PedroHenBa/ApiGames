import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

class Connection {
  private static instace: Connection | undefined;
  private readonly connection: Sequelize;

  private constructor() {
    const { NAME_DATABASE, DATABASE_USER, PASSWORD, HOST } = process.env;
    console.log(NAME_DATABASE, DATABASE_USER, PASSWORD, HOST);

    this.connection = new Sequelize(NAME_DATABASE, DATABASE_USER, PASSWORD, {
      host: HOST,
      dialect: 'mysql',
      timezone: '-03:00',
    });
  }

  public getConnection(): Sequelize {
    return this.connection;
  }

  public static getInstance(): Connection {
    if (!this.instace) {
      return new Connection();
    } else {
      return this.instace;
    }
  }
}

export default Connection.getInstance();
