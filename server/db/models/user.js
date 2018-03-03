const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Letter = require('./letter')
const LetterCategory = require('./letterCategory')

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
  const letterIdFrequency = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 14, 14, 14, 14, 14, 15, 15, 15,
    15, 15, 15, 15, 15, 16, 16, 17, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 20,
    20, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26]

  let letterCategoryId,
      letter,
      dispacementDistance,
      displacementBearing

  try {
    for (let i = 0; i < 7; i++) {
      letterCategoryId =
        letterIdFrequency[
          Math.floor(Math.random() * letterIdFrequency.length) + 1
        ]
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
