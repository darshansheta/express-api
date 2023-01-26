// this is not needed anymore since we started using sequelize-cli tool
const config = require('./config/db.config.js');
const { Sequelize } = require('sequelize');

const db = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
  });

db.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}).catch(err => console.log("Error: " + err));

module.exports = db;