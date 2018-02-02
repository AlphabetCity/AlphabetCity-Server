const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
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
  }
})

module.exports = Item
