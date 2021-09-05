import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import instanceConnection from '../database/Connection';
import { GameAttributes } from '../interfaces/Game';
const connection = instanceConnection.getConnection();

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {} // eslint-disable-line

interface GameInstance
  extends Model<GameAttributes, GameCreationAttributes>,
    GameAttributes {}

export const Games = connection.define<GameInstance>(
  'games',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  { timestamps: false },
);

Games.sync();
