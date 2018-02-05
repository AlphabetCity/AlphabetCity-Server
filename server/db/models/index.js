const User = require('./user')
const Letter = require('./letter')
const LetterCategory = require('./letterCategory')


//Associations

Letter.belongsTo(LetterCategory)
LetterCategory.hasMany(Letter)

//Items will have "getOwner", "setOwner", and "createOwner"
Letter.belongsTo(User)
//Owners will have "getItems", "setItems", "createItem", "addItem", "addItems", "removeItem", "removeItems", "hasItem", "hasItems", and "countItems"
User.hasMany(Letter)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Letter,
  LetterCategory
}
