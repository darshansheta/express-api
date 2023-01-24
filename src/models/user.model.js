const SequelizeM = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js');

const User = db.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    underscored: true
});

module.exports = User;