import { DataTypes, Sequelize, Optional, Model } from 'sequelize';
import instanceConnection from '../database/Connection';
import { UserAttributes } from '../interfaces/User';

const connection = instanceConnection.getConnection();

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {} //eslint-disable-line

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

export const Users = connection.define<UserInstance>('users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
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
});

Users.sync();
