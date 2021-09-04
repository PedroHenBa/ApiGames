require('dotenv').config();
const { Sequelize } = require('sequelize');

const connection = new Sequelize(
  process.env.NAME_DATABASE,
  process.env.DATABASE_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '-03:00',
  },
);

module.exports = connection;
