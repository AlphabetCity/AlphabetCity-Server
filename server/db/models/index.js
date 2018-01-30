const User = require('./user')
const Item = require('./item')
const UserItem = require('./userItem')


//Associations

Item.belongsToMany(User, {through: UserItem});
User.belongsToMany(Item, {through: UserItem});


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Item,
  UserItem
}
