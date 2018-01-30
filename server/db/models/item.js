const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  points: {
    type: Sequelize.INTEGER,
    validate: {
      max: 100,
      min: 0
    }
  },
  modelUrl: {
    type: Sequelize.STRING
    //not sure what data will be stored here yet
  }
})

module.exports = Item
