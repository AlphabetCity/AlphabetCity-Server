const Sequelize = require('sequelize')
const db = require('../db')

const Word = db.define('word', {
  latitude: {
    type: Sequelize.DOUBLE
  },
  longitude: {
    type: Sequelize.DOUBLE
  },
  word: {
    type: Sequelize.STRING
  },
}
)

module.exports = Word
