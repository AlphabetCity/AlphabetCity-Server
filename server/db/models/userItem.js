const Sequelize = require('sequelize')
const db = require('../db')

const UserItem = db.define('userItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  latitude: {
    type: Sequelize.DOUBLE
  },
  longitude: {
    type: Sequelize.DOUBLE
  },
  hidden: {
    type: Sequelize.VIRTUAL,
    get () {
      if (this.getDataValue('latitude')) return true
      else return false
    }
  },
})

module.exports = UserItem
