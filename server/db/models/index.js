const User = require('./user')
const Letter = require('./letter')
const LetterCategory = require('./letterCategory')


//Associations

Letter.belongsTo(LetterCategory)
LetterCategory.hasMany(Letter)

//Letters will have "getOwner", "setOwner", and "createOwner"
Letter.belongsTo(User)
//Owners will have "getLetters", "setLetters", "createLetter", "addLetter", "addLetters", "removeLetter", "removeLetters", "hasLetter", "hasLetters", and "countLetters"
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
