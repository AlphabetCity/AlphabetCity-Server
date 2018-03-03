const Sequelize = require('sequelize')
const db = require('../db')

const Letter = db.define('letter', {
  latitude: {
    type: Sequelize.DOUBLE
  },
  longitude: {
    type: Sequelize.DOUBLE
  },
  displacementDistance: {
    type: Sequelize.DOUBLE
  },
  displacementBearing: {
    type: Sequelize.DOUBLE
  },
  hidden: {
    type: Sequelize.VIRTUAL,
    get() {
      if (this.getDataValue('latitude')) return true
      else return false
    }
  }
})

module.exports = Letter
