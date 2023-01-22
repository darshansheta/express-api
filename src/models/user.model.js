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

// `sequelize.define` also returns the model
console.log(User === db.models.User); // true

module.exports = User;