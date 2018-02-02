const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Item = require('./item')
const ItemCategory = require('./itemCategory')

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

User.getUserAndItemsById = function (id) {
  return User.findById(id, {
    include: {
      model: [Item]
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

const addItems = (user) => {

  return ItemCategory.findAndCountAll()
    .then(obj => obj.count)
    .then(count => {
      let itemCategoryIds = []
      for (let i = 1; i <= count; i++) {
        itemCategoryIds.push(i)
      }
      return itemCategoryIds
    })
    .then(idArray => {
      idArray.map((id) => {
        Item.create({ itemCategoryId: id, userId: user.id })
      })
    })
    .catch(err => console.log(err))
}


// after a user is created, we create one of each item with that user's id (these are the items the user starts the game with)
User.afterCreate('addItems', (user) => {
  return addItems(user)
})


User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
