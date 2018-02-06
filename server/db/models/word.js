const Sequelize = require('sequelize')
const db = require('../db')
const dictionary = require('../utils/dictionary')

const Word = db.define('word', {
  latitude: {
    type: Sequelize.DOUBLE
  },
  longitude: {
    type: Sequelize.DOUBLE
  },
  word: {
    type: Sequelize.STRING,
    validate: { isIn: [dictionary] }
  },
}
)

module.exports = Word
