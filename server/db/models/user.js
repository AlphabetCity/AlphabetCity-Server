const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Letter = require('./letter')
const LetterCategory = require('./letterCategory')
const { getRandomLetterId } = require('../../utils/letterIdFrequency')

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true,
      len: [2, 15]
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})


/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

User.getUserAndLettersById = function (id) {

  return User.findById(id, {
    include: {
      model: [Letter]
    }
  })
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

const addLetters = async user => {

  let letterCategoryId,
      letter,
      dispacementDistance,
      displacementBearing

  try {
    for (let i = 0; i < 7; i++) {
      letterCategoryId = getRandomLetterId()
      letter = await LetterCategory.findById(letterCategoryId)
      displacementDistance = Math.random() * letter.points
      displacementBearing = Math.random() * 360

      Letter.create({
        letterCategoryId,
        userId: user.id,
        displacementDistance,
        displacementBearing
      })
    }
  } catch (error) {
    console.error(error)
  }

}

// after a user is created, we create one of each letter with that user's id (these are the letters the user starts the game with)
User.afterCreate('addLetters', (user) => {
  return addLetters(user)
})


User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
