const { Sequelize } = require('sequelize');

const connection = new Sequelize('api_games', 'root', 'toor', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00',
});

module.exports = connection;
