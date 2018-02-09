const Sequelize = require('sequelize')
const db = require('../db')
const dictionary = require('../../utils/dictionary')


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
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}
)

module.exports = Word
