const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../database/Connection');

const Games = connection.define(
  'games',
  {
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
  },
  {
    timestamps: false,
  },
);

module.exports = Games;
