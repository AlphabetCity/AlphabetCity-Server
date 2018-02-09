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
  icon: {
    type: Sequelize.STRING,
    defaultValue: 'http://gazettereview.com/wp-content/uploads/2016/09/what-happened-to-lance-bass-nsync-203x300.png'
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

const addLetters = (user) => {
  for (let i = 0; i < 7; i++) {
    Letter.create({ letterCategoryId: 27, userId: user.id })
      .catch(err => console.log(err))
  }
}


// after a user is created, we create one of each letter with that user's id (these are the letters the user starts the game with)
User.afterCreate('addLetters', (user) => {
  return addLetters(user)
})


User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
