const Sequelize = require('sequelize')
const db = require('../db')

const UserItem = db.define('userItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  longitude: {
    type: Sequelize.DOUBLE
  },
  latitude: {
    type: Sequelize.DOUBLE
  },
  hidden: {
    type: Sequelize.VIRTUAL,
    get: function () {
      if (this.getDataValue('latitude')) return true;
      else return false;
    }
  },
})

module.exports = UserItem
