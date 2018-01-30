const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const UserItem = require('./userItem')
const Item = require('./item');

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
  //TODO - get amount of items in satchel
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
      model: [UserItem]
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

const addUserItems = (user) => {

  return Item.findAndCountAll()
  .then(obj => obj.count)
  .then(count => {
    let itemIds = [];
    for (let i = 1; i <= count; i++) {
      itemIds.push(i)
    }
    return itemIds
  })
  .then(idArray => {
    return user.setItems(idArray);
  })
  .catch(err => console.log(err));
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

// after a user is created, we create one of each item with that user's id (these are the items the user starts the game with)
User.afterCreate('addUserItems', (user) => {
  return addUserItems(user);
});


module.exports = User
